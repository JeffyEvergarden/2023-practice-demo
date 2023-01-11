/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target, flag) {
  // 找数
  if (nums.length === 0) {
    return false
  }
  let a = nums
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    // console.log(i, j)
    let mid = parseInt((i + j) / 2)

    flag && console.log(i, j, '_______', mid, '_______', a[mid])
    if (target === a[mid]) {
      return true
      // 正好单调区间
    } else if (target < a[mid] && target >= a[i]) {
      j = mid - 1
    } else if (target < a[mid] && target < a[i]) {
      i++
    } else if (target > a[mid] && target <= a[j]) {
      i = mid + 1
    } else if (target > a[mid] && target > a[j]) {
      j--
    } else {
      console.log('死循环')
      console.log(i, j)
      break
    }
  }

  return false
}
console.log(search([2, 5, 6, 0, 0, 1, 2], 4))
// ==> false

console.log(search([1, 0, 1, 1, 1], 0))
// ==> true

console.log(search([1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2))
// ==> true

console.log(search([5, 1, 3], 5, true))
// ==> true

console.log(search([0, 0, 1, 1, 2, 0], 2))
// => true

console.log(search([3, 5, 1], 2, true))
