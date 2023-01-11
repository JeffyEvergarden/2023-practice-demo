/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1
  }
  if (n === 1 || x === 0) {
    return x
  }
  let result = 0

  let type = '+'
  if (n < 0) {
    type = '-'
    result = 1 / myPow(x, -n)
    return result
  }

  let i = 1

  let dr = n % 2

  result = myPow(x * x, n / 2) * myPow(x, dr)

  return result
}

console.log(myPow(2, 10))

console.log(myPow(2, 11))
