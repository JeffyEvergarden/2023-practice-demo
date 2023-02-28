// 1、将收集依赖的部分进行抽离、触发副作用也抽离出一个函数




let activeEffect = null;

let weakMap = new WeakMap(); // weakMap  ---  target ---> map ----> (key, set)

// 收集依赖
function track(target, key) {
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
}

// 触发副作用

function trigger(target, key) {
  let dpsMap = weakMap.get(target);
  if (!dpsMap) return;
  const effects = dpsMap.get(key);
  // 副作用拿出来执行一遍
  effects && effects.forEach(fn => {
    fn();
  });
}


function reactive(data) {
  // obj代理
  const obj = new Proxy(data, {
    get(target, key) {
      // 如果没有副作用
      if (!activeEffect) return target[key]
      track(target, key);
      return target[key]
    },

    set(target, key, val) {

      target[key] = val
      trigger(target, key, val)
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