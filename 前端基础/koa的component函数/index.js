function compose(middlewaves) {
  function dispatch(ctx, i) {
    const fn = middlewaves[i]
    if (!fn) {
      return Promise.resolve()
    }
    return Promise.resolve(
      fn(ctx, function next() {
        return dispatch(ctx, i + 1)
      })
    )
  }
  return function (content) {
    dispatch(content, 0)
  }
}

function compose(middlewaves) {
  function dispatch(content, i) {
    const fn = middlewaves[i]

    if (!fn) {
      return Promise.resolve()
    }

    return Promise.resolve(
      fn(ctx, function next() {
        return dispatch(content, i + 1)
      })
    )
  }

  return function (ctx) {
    dispatch(ctx, 0)
  }
}
