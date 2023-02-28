# 第三章、响应式原理

理解副作用函数：
希望某值变化后 ---> 副作用函数重新执行

### 阶段 A

a、参考 1.0 的代码。设计了个简单的响应式
当对象值改变 ---> 触发 effect 函数的重新执行

b、设计桶的概念，做到对象 target 和 key 对应一个 Set

weekMap ----> 通过 target 得到一个 map
map --------> 通过 key 得到一个 set

c、1.1 代码 封装 track 和 trigger 函数

### 阶段 B - 理解分支切换

理解分支切换

```
let ob = {
  show: true,
  name: 'hello ob'
}
// 会导致 show、name 都收集了这函数
// 但有时候show为false 不想key为name进行收集

effect(() => {
  testObj.desc = ob.show? ob.name : '----'
  console.log(testObj.desc);
})
```

参考 1.2 、1.3 代码

做到这个每次执行都得重新收集

执行重新收集

```
const effect = (fn) => {
  // 不能污染传进来的fn函数 所以再包一层
  //
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn;
    fn();
  }
  // 初始化
  effectFn.deps = []
  effectFn();
}
```

### 阶段 C ---- 处理嵌套 effect

参考 1.4 加入 stack 来控制 activeEffect

```
const effect = (fn) => {
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
  effectFn.deps = []
  effectFn();
}
```

### 阶段 D - 避免无限循环

```
effect(()=> {
  obj.foo++
})

obj.foo = obj.foo + 1
```

effectFn 执行 --> foo 进行 track ---> foo set 之后又 trigger effectFn 执行 进入死循环

trigger 执行的时候不能执行自己本身

### 阶段 E ----- 调度

// 关于 调度方法

参考2.0的代码

### 阶段 F ----- 关于 computed 和 lazy

lazy的实现

```
const effect  = ()=> {
  // --- 省略代码
  // --- 定义 effectFn
  if (options.lazy) {
      console.log('lazy')
      // 不立刻执行
    } else {
      effectFn();
    }
    return effectFn;
}
```

computed的实现

```
function computed(getter) {
  let value = null;
  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      if (!dirty) {
        dirty = true
        trigger(obj, 'value')
      }
    }
  })

  const obj = {
    get value() {
      if (dirty) {
        value = effectFn()
        console.log('放缓存')
      }
      track(obj, 'value')
      return value
    }
  }
  return obj
}
```


### 阶段 G ------- watch的实现

watch 实现 参考4.0的代码
