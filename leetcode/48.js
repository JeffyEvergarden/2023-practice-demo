/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 新数组 旋转 ----->
var rotate3 = function (matrix) {
  let rowLen = matrix.length
  let columnLen = matrix[0].length
  // -----------------
  const newMatrix = new Array(columnLen).fill(null).map((item) => {
    return new Array(rowLen).fill(null)
  })

  for (i = 0; i < rowLen; i++) {
    for (j = 0; j < columnLen; j++) {
      // console.log(j, rowLen - 1 - i)
      newMatrix[j][rowLen - 1 - i] = matrix[i][j]
    }
  }

  return newMatrix
}

var rotate = function (matrix) {
  let rowLen = matrix.length
  let columnLen = matrix[0].length
  let a = matrix

  // 0 1 2 3 4
  // console.log(rowLen)

  for (i = 0; i < (rowLen - 1) / 2; i++) {
    for (j = 0; j < columnLen / 2; j++) {
      let tmp = a[i][j]

      a[i][j] = a[columnLen - 1 - j][i]
      a[columnLen - 1 - j][i] = a[rowLen - 1 - i][columnLen - 1 - j]
      a[rowLen - 1 - i][columnLen - 1 - j] = a[j][rowLen - 1 - i]
      a[j][rowLen - 1 - i] = tmp

      // console.log(i, j)
      // console.log(JSON.stringify(a))
      // // break
    }
  }
  return a
}

const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

//
// const nm = [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

const n = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

const x = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

console.log(rotate(m))

console.log(rotate(n))

console.log(rotate(x))
