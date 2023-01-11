// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */

// 方法1  每一列 往左右找最大两个高度，知道当前列可以统计的个数
var trap = function (height) {
  if (height.length === 1) {
    return 0
  }

  //
  function findLeft(k) {
    let h = 0
    k = k - 1
    l = -1
    while (k >= 0) {
      if (height[k] > h) {
        h = height[k]
        l = k
      }
      k--
    }
    return [l, h]
  }

  function findRight(k) {
    let h = 0
    k = k + 1
    let r = -1
    while (k < height.length) {
      if (height[k] > h) {
        h = height[k]
        r = k
      }
      k++
    }
    return [r, h]
  }

  let i = 1
  let sum = 0
  for (let i = 1; i < height.length; i++) {
    let [m, lh] = findLeft(i)
    let [n, rh] = findRight(i)
    if (m === -1 || n === -1) {
      continue
    }
    // 算面积
    let minH = Math.min(lh, rh)
    if (minH > height[i]) {
      sum = minH - height[i] + sum
    }
  }
  return sum
}

let sum = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])

let sum2 = trap([4, 2, 0, 3, 2, 5])

console.log(sum, sum2)
