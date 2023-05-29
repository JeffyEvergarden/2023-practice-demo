Object.prototype._call = function (content) {
  var obj = content || globalThis
  obj._func = this
  const args = Array.from(arguments).slice(1)
  const result = obj._func(...args)
  delete obj._func
  return result
}

Object.prototype._apply = function (content, args) {
  var obj = content || globalThis
  obj._func = this
  const result = obj._func(...args)
  delete obj._func
  return result
}

Object.prototype._bind = function (content, ...args) {
  var obj = content || globalThis
  const func = this
  return function () {
    const _args = args.concat(Array.from(arguments))
    obj._func = func
    let result = obj._func(...args)
    delete obj._func
    return result
  }
}
