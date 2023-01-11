var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length // 2
  let n = obstacleGrid[0].length // 1

  //
  console.log(m, n)
  let deep = new Array(m).fill(null).map((item) => {
    return new Array(n).fill(null)
  })

  let flag = false
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      flag = true
    }
    if (flag) {
      deep[0][i] = 0
    } else {
      deep[0][i] = 1
    }
  }
  flag = false
  for (let j = 0; j < m; j++) {
    if (obstacleGrid[j][0] === 1) {
      flag = true
    }
    if (flag) {
      deep[j][0] = 0
    } else {
      deep[j][0] = 1
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        deep[i][j] = 0
      } else {
        deep[i][j] = deep[i - 1][j] + deep[i][j - 1]
      }
    }
  }
  return deep[m - 1][n - 1]
}

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
)

console.log(uniquePathsWithObstacles([[1], [0]]))
