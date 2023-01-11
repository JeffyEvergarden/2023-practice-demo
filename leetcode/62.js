/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 递归超时
var uniquePaths2 = function (m, n) {
  let len = 0

  function deep(i, j) {
    if (i == m - 1 && j == n - 1) {
      len++
      return
    }
    if (i >= m || j >= n) {
      return
    }
    // 向下
    deep(i + 1, j)
    // 向右
    deep(i, j + 1)
  }
  deep(0, 0)
  return len
}

// 动态规划

// f(i, j) = f(i-1, j) + f(i, j-1)
// 超时
var uniquePaths3 = function (m, n) {
  if (m <= 0 || n <= 0) {
    return 0
  }
  if (n === 1 || m === 1) {
    return 1
  }
  //
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
}

var uniquePaths = function (m, n) {
  //
  let deep = new Array(m).fill(null).map((item) => {
    return new Array(n).fill(null)
  })

  for (let i = 0; i < n; i++) {
    deep[0][i] = 1
  }
  for (let j = 1; j < m; j++) {
    deep[j][0] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      deep[i][j] = deep[i - 1][j] + deep[i][j - 1]
    }
  }
  // console.log(deep)
  return deep[m - 1][n - 1]
}

console.log(uniquePaths(3, 7))
