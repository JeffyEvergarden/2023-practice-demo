const proto = {
  bar: 1
}
const child = reactive(proto);

const obj = {}
const parent = reactive(obj);

Object.setPrototypeOf(child, parent);

effect(() => {
  console.log(child.bar);
})

child.bar = 2;


// child.bar = 2; 会导致执行两次

// child.bar 在 get 的时候  child ---> bar
// obj -----> bar

// 改造

child.raw === proto // true
parent.raw === proto // true

function reactive(obj) {
  return new Proxy(obj, {

    get(target, key, receiver) {
      if (key === 'raw') {
        return target
      }
      track(target, key);
      return Reflect.get(target, key, receiver)
    },

    set(target, key, newVal, receiver) {
      const oldVal = target[key];
      const type = Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD'

      const res = Reflect.set(target, key, newVal, receiver)
      
      // 屏蔽 child.bar 而是 parent.bar触发
      if (target === receiver.raw) {
        // trigger
      }
      return res
    }

  })
}