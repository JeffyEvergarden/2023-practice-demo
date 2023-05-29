/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let valid = /[\(\)\{\}\[\]]/
  let valid1 = /[\(\{\[]/
  let valid2 = /[\)\}\]]/
  let arr = s.split('')

  let stack = []

  while (arr.length !== 0) {
    let val = arr.shift()

    if (valid.test(val)) {
      if (valid1.test(val)) {
        stack.push(val)
      } else if (valid2.test(val)) {
        let val2 = stack.pop()
        if (val2 === '[' && val === ']') {
        } else if (val2 === '{' && val === '}') {
        } else if (val2 === '(' && val === ')') {
        } else {
          return false
        }
      }
    }
  }
  if (stack.length > 0) {
    return false
  }
  return true
}
