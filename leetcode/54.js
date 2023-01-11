/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let a = matrix
  let len = a.length
  let i = 0,
    j = 0,
    istart = 0,
    jstart = 0,
    iend = len - 1,
    jend = a[0].length - 1
  let arr = []

  while (istart <= iend && jstart <= jend) {
    // 左上 -> 右上
    while (j <= jend) {
      arr.push(a[i][j])
      j++
    }
    istart++
    i = istart
    j = jend

    if (istart > iend) {
      break
    }

    // 右上 ->  右下
    while (i <= iend) {
      arr.push(a[i][j])
      i++
    }
    jend--
    j = jend
    i = iend

    if (jstart > jend) {
      break
    }

    // 右下 -> 左下
    while (j >= jstart) {
      arr.push(a[i][j])
      j--
    }
    iend--
    i = iend
    j = jstart

    if (istart > iend) {
      break
    }

    // 右下 -> 左上
    while (i >= istart) {
      arr.push(a[i][j])
      i--
    }
    jstart++
    j = jstart
    i = istart
  }

  return arr
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
// [1,2,3,6,9,8,7,4,5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
)

// [1,2,3,4,8,12,11,10,9,5,6,7]
