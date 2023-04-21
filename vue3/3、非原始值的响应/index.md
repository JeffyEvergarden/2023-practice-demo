## 1、key值迭代

```
// 迭代key
const ITERATE_KEY = Symbol();

const p  = new Proxy(obj, {
  // 'value' in obj 
  ownKeys(target) {
    // 将 副作用函数 与 ITERATE_KEY 关联
    track(target, ITERATE_KEY)
    return Reflect,ownKeys(target)
  }
})
```

## 2、区别于 数据的新增和修改  ADD、SET

```
// set方法内
const type = Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD'

Reflect.set(target, key, newVal, receiver);

ADD的时候要触发 ITERATE_KEY的 effect 执行
```

## 3、两个proxy对象 设置为原型

const parent = 