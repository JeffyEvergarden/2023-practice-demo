/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let up = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i] + up
    up = num > 10 ? num % 10 : parseInt(num / 10)
    digits[i] = num % 10
  }

  if (up > 0) {
    digits.splice(0, 0, up)
  }
  console.log(digits)
  return digits
}

plusOne([1, 2, 4])

plusOne([9, 9, 9])
