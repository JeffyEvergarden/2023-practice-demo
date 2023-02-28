// 当前版本为基础版

// 解决第一个疑问， 为什么用weakMap?  weakMap 不会阻碍垃圾回收机制，当无引用的时候自然而然就销毁了。

let activeEffect = null;

let weakMap = new WeakMap(); // weakMap  ---  target ---> map ----> (key, set)

let data = {
  text: 'hello vue 3'
}

let time = 0;

function reactive(data) {
  // obj代理
  const obj = new Proxy(data, {
    get(target, key) {
      // 如果没有副作用
      if (!activeEffect) return target[key]

      let dpsMap = weakMap.get(target);
      if (!dpsMap) {
        weakMap.set(target, (dpsMap = new Map()))
      }
      // target 和 key 找到个数组（set） 存储副作用
      let set = dpsMap.get(key)

      if (!set) {
        dpsMap.set(key, (set = new Set()))
      }
      console.log('触发收集')
      set.add(activeEffect);

      return target[key]
    },

    set(target, key, val) {

      target[key] = val

      let dpsMap = weakMap.get(target);
      if (!dpsMap) return;
      const effects = dpsMap.get(key);
      // 副作用拿出来执行一遍
      effects && effects.forEach(fn => {
        fn();
      });
    }

  })

  return obj;
}

const effect = (fn) => {
  activeEffect = fn;
  fn();
}

const ob = reactive({
  name: '阿维塔',
  age: 10
})

effect(() => {
  console.log(ob.name)
})

ob.name = '阿尔敏'