/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 颜色分类
// [1,1,2,2,0,0]
var sortColors = function (nums) {
  //
  let a = nums
  let i = 0,
    j = nums.length - 1
  // 第一次把 0都放到前置
  while (i < j) {
    while (a[i] === 0) {
      i++
      if (i > j) {
        break
      }
    }

    while (a[j] !== 0) {
      j--
      if (i > j) {
        break
      }
    }
    if (i <= j) {
      let tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
      i++
      j--
    }
  }
  // 这样 0都在前面了
  while (a[i] === 0) {
    i++
  }

  // 再把 1 放前面
  j = nums.length - 1
  while (i < j) {
    while (a[i] === 1) {
      i++
      if (i > j) {
        break
      }
    }
    while (a[j] !== 1) {
      j--
      if (i > j) {
        break
      }
    }

    if (i <= j) {
      let tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
      i++
      j--
    }
  }
  return nums
}

// console.log(sortColors([1,1,2,2,0,0]))

// console.log(sortColors([2, 0, 2, 1, 1, 0]))

console.log(sortColors([0, 1, 0]))
// console.log([1, 1])
