/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length
  let n = grid[0].length
  // target = [m-1, n-1]

  let deep = new Array(m).fill(null).map((item) => {
    return new Array(n).fill(null)
  })

  // console.log(grid)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0 && j > 0) {
        deep[i][j] = Math.min(deep[i - 1][j], deep[i][j - 1]) + grid[i][j]
      } else if (i === 0 && j === 0) {
        deep[i][j] = grid[i][j]
      } else if (i === 0) {
        deep[i][j] = deep[i][j - 1] + grid[i][j]
      } else if (j === 0) {
        deep[i][j] = deep[i - 1][j] + grid[i][j]
      }
    }
  }

  // console.log(deep)

  return deep[m - 1][n - 1]
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)

console.log(minPathSum([[1, 3, 1]]))
