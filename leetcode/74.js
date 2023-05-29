/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 二分法思路

var searchMatrix = function (matrix, target) {
  let mt = matrix
  let mlen = mt.length - 1
  let nlen = mt[0].length - 1

  let i = 0
  let j = mlen

  while (i < j) {
    let k = parseInt((i + j) / 2)

    if (mt[k][nlen] < target) {
      i = k + 1
    } else if (mt[k][nlen] > target) {
      j = k
    } else {
      // 相等 = 找到了
      return true
    }
  }

  console.log(i, i === j)

  if (i === j) {
    // 再次二分法
    let row = i
    let k = 0
    i = 0
    j = nlen
    while (i <= j) {
      k = parseInt((i + j) / 2)

      if (mt[row][k] > target) {
        j= k - 1
      } else if (mt[row][k] < target) {
        i = k + 1
      } else {
        return true
      }
    }
  }

  return false
}


var searchMatrix2 = function (matrix, target) {
  let mt = matrix
  let mlen = mt.length - 1
  let nlen = mt[0].length - 1

  let i = 0
  let j = mlen

  while (i < j) {
    let k = parseInt((i + j) / 2)

    if (mt[k][nlen] < target) {
      i = k
    } else if (mt[k][nlen] > target) {
      j = k
    } else {
      // 相等 = 找到了
      return true
    }
  }

  console.log(i, i === j)

  if (i === j) {
    // 再次二分法
    let row = i
    let k = 0
    i = 0
    j = nlen
    while (i <= j) {
      k = parseInt((i + j) / 2)

      if (mt[row][k] > target) {
        j= k - 1
      } else if (mt[row][k] < target) {
        i = k + 1
      } else {
        return true
      }
    }
  }

  return false
}


console.log(searchMatrix([[1, 3]], 3))
