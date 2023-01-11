var isValidSudoku = function (board) {
  let len = 9
  // 横着找
  let rows = new Array(9).fill().map((item) => {
    return new Array(9).fill(-1)
  })
  let columns = new Array(9).fill().map((item) => {
    return new Array(9).fill(-1)
  })
  let nineBoard = new Array(3).fill().map((item) => {
    return new Array(3).fill().map((item) => {
      return new Array(9).fill(-1)
    })
  })
  // console.log(rows)
  // console.log(columns)
  //
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j]
      if (val !== '.') {
        let char = val - '1'
        char = Number(char)
        rows[i][char]++ // 算行
        columns[j][char]++ // 算列

        let m = parseInt(i / 3)
        let n = parseInt(j / 3)
        nineBoard[m][n][char]++
        // console.log(
        //   i,
        //   j,
        //   char,
        //   rows[i][char],
        //   columns[j][char],
        //   nineBoard[m][n][char]
        // )
        if (
          rows[i][char] > 0 ||
          columns[j][char] > 0 ||
          nineBoard[m][n][char] > 0
        ) {
          return false
        }
      }
    }
  }

  return true
}

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

let board2 = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.']
]

console.log(isValidSudoku(board))
// console.log(isValidSudoku(board2))

// rows [0][4、2、6]
// rows [1][]
