var exist = function (board, word) {
  // 减少写字次数
  let arr = board
  let mlen = arr.length - 1
  let nlen = arr[0].length - 1
  let len = word.length - 1

  let flag = false
  let path = []

  function visit(i, j) {
    if (i < 0 || j < 0 || i > mlen || j > nlen) {
      return false
    }
    if (path.includes(i + '_' + j)) {
      return false
    } else {
      return true
    }
  }

  function pop(list, n) {
    while (list.length > n) {
      list.pop()
    }
  }

  function collect(i, j, index) {
    // 超过字符串长度
    if (index > len) {
      return
    }
    let l = path.length
    if (arr[i][j] === word[index]) {
      path.push(i + '_' + j)
      if (index === len) {
        // 字符长度刚好匹配
        flag = true
        return
      }
      // 继续下一步
      visit(i, j + 1) && collect(i, j + 1, index + 1)
      !flag && visit(i, j - 1) && collect(i, j - 1, index + 1)
      !flag && visit(i + 1, j) && collect(i + 1, j, index + 1)
      !flag && visit(i - 1, j) && collect(i - 1, j, index + 1)
    }
    pop(path, l)
    return
  }

  for (let i = 0; i <= mlen; i++) {
    for (let j = 0; j <= nlen; j++) {
      collect(i, j, 0)
      if (flag) {
        return true
      }
    }
  }
  return flag
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'E', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'ABCESEEEFS'
  )
)
