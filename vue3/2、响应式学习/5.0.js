let obj = {
  name: 'hello world'
}

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

  let cleanup

  function onInvalidate(fn) {
    cleanup = fn
  }

  const job = () => {
    cleanup();
    newValue = ef();
    cb(oldValue, newValue, onInvalidate);
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

watch(obj, async (oldVal, newVal, onInvalidate) => {

  let expired = false

  onInvalidate(() => {
    expired = true
  })

  const res = await fetch('/path/to/request')

  if (!expired) {
    finalData = res
  }
})