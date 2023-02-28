// 1、将收集依赖的部分进行抽离、触发副作用也抽离出一个函数

// 2、effect 抽离出来一层，不污染

// 3、解觉 set的foreach 死循环问题

// 4、 解决嵌套 effect的问题  加入栈来恢复上一个 activeEffect 的值

// 5、 解决无限循环问题

let activeEffect = null;

const effectStack = [];

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
  const _effectsToRun = new Set(effects);
  _effectsToRun && _effectsToRun.forEach(fn => {
    if (activeEffect !== fn) {
      fn(); // 每个都触发重新收集  fn清了所有依赖 又把自己加进去
    }
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


const cleanup = (effectFn) => {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i]; // 每个都是set 
    deps.delete(effectFn);
  }
  effectFn.deps.length = 0 // 清空数组
}

const effect = (fn, options = {}) => {
  // 不能污染传进来的fn函数 所以再包一层
  //
  const effectFn = () => {
    cleanup(effectFn);
    effectStack.push(effectFn);
    activeEffect = effectFn;
    fn();
    effectStack.pop();
    activeEffect = effectStack[effectStack.length - 1]
  }
  // 初始化
  effectFn.deps = [];
  effectFn.options = options;
  effectFn();
}

const ob = reactive({
  show: true,
  name: '阿维塔',
  age: 10
})

const testObj = {}

effect(() => {
  ob.age++; // Maximum call stack size exceeded
  console.log(ob.age)
  // ob.age = ob.age + 1;
})