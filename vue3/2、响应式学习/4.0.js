// watch 原理
function traverse(value, seen = new Set()) {
  // 不是对象 或者 已经遍历过该值就返回
  // typeof null === 'object'  ===> true
  if (typeof value !== 'object' || value === null || seen.has(value)) return;

  seen.add(value);

  for (const k in value) {
    traverse(value[k], seen)
  }
  return value
}


// 需要监听的变量 、 回调函数、 观测方法
const watch = (source, cb, options = {}) => {
  let getter

  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => {
      traverse(source)
    }
  }

  let oldValue, newValue

  const job = () => {
    newValue = ef();
    cb(oldValue, newValue);
    oldValue = newValue
  }

  const ef = effect(() => {
    return getter()
  }, {
    lazy: true,
    scheduler(fn) {
      if (options.flush === 'post') {
        const p = Promise.resolve()
        p.then(job);
      } else {
        job();
      }
    }
  })
  oldValue = ef();
}