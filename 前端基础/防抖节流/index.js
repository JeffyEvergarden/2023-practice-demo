// 普通版节流
function debounce(fn, second) {
  const ctx = this || globalThis

  const _fn = fn.bind(ctx)

  let timer = null

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      _fn(...args)
    }, second * 1000)
  }
}

// 立即调用版节流
function debounce(fn, second) {
  const ctx = this || globalThis

  const _fn = fn.bind(ctx)

  let timer = null

  let flag = true

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }

    // 延后
    timer = setTimeout(() => {
      flag = true
    }, second * 1000)

    if (flag) {
      _fn(...args)
      flag = false
    }
  }
}

function throttle(fn, second) {
  const ctx = this || globalThis

  const _fn = fn.bind(ctx)

  let timer = null

  return (...args) => {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      timer = null
      _fn(...args)
    }, second * 1000)
  }
}
