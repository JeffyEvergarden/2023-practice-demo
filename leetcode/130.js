var solve = function (board) {
  let rowL = board.length - 1;
  let colL = board[0].length - 1;

  let stack = [];
  let err = 0;
  let hasVertiSet = new Set();

  function bool(i, j) {
    if (i < 0 || i > rowL || j < 0 || j > colL) {
      return false
    }

    let flag = board[i][j] === 'O'
    // 追加
    flag && hasVertiSet.add(`${i}_${j}`)
    // 追加
    flag && stack.push([i, j])
    if (flag && (i <= 0 || i >= rowL || j <= 0 || j >= colL)) {
      err++;
    }
    return flag;
  }

  function vertify(i, j) {
    // 遇到验证过的值跳过
    if (hasVertiSet.has(`${i}_${j}`)) {
      return false
    }
    if (bool(i, j)) {
      // 收集元素 上下左右元素
      // 需要变动的塞进stack
      // 验证过的塞进hasVertiSet
      vertify(i - 1, j)
      vertify(i + 1, j)
      vertify(i, j - 1)
      vertify(i, j + 1)
      // 收集过程中碰到了 边界值O 表示直接失败 err+1
      // 
    }

    return false
  }

  for (let i = 1; i < rowL; i++) {
    for (let j = 1; j < colL; j++) {
      err = 0;
      vertify(i, j);
      if (err <= 0) {
        stack.forEach((arr) => {
          board[arr[0]][arr[1]] = 'X'
        })
      }
      console.log(`${i}_${j}`, err);
      console.log(stack);
      stack = [];
      // err > 0 stack值置为 
      // err 
      // 清除stack
    }
  }


  return board
};

const arr = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"]
]

const arr2 = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"]
]

console.log(
  solve(arr2)
)