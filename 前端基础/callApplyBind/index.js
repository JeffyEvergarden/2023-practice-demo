const obj = {
  name: 'fate',
}

const getName = function (val1, val2) {
  console.log(this.name, val1, val2)
  return 1
}

Function.prototype._call = function (ctx) {
  const ob = ctx || global
  ob.func = this
  const args = Array.from(arguments).slice(1)
  const result = obj.func(...args)
  delete ob.func
  return result
}

Function.prototype._apply = function (ctx, args) {
  const ob = ctx || global
  ob.func = this
  const result = obj.func(...args)
  delete ob.func
  return result
}

Function.prototype.bind = function (ctx) {
  const ob = ctx || global
  const fn = this
  let preArg = Array.prototype.slice.call(arguments, 1)
  return function (...args) {
    let curArg = Array.prototype.concat.call(preArg, args)
    ob._fn = fn
    let result = ob._fn(...curArg);
    delete obj._fn;
    return result;
  }
}


getName._call(obj, 'new', 'old')

getName._apply(obj, ['new', 'old'])

const fn = getName.bind(obj)

fn('new', 'old');