// 1、将收集依赖的部分进行抽离、触发副作用也抽离出一个函数

// 2、effect 抽离出来一层，不污染


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
  
  // 将 
  activeEffect.deps.push(set);
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
  // 不能污染传进来的fn函数 所以再包一层
  //
  const effectFn = () => {
    activeEffect = fn;
    fn();
  }
  effectFn.deps = []
  effectFn();
}

const ob = reactive({
  show: true,
  name: '阿维塔',
  age: 10
})

const testObj = {}

effect(() => {
  testObj.desc = ob.show ? ob.name : '----'
  console.log(testObj.desc);
})

ob.name = '阿尔敏'
ob.show = false