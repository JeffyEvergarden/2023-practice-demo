/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  if (x == 0) {
    return true
  }
  let arr = [...x.toString()]
  let i = 0
  j = arr.length - 1

  while (i <= j) {
    if (arr[i] === arr[j]) {
      i++
      j--
    } else {
      break
    }
  }
  if (i > j) {
    return true
  } else {
    return false
  }
}
