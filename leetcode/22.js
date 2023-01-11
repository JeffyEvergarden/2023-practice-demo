// 22. 括号生成

var generateParenthesis = function (n) {
  let arr = []
  let val = 0
  let _n = n
  let len1 = n - 1
  let len2 = n
  let str = '('
  n = n - 1

  function genStr(str, l1, l2) {
    let len = str.length

    if (len < 2 * _n) {
      if (l1 > 0) {
        genStr(str + '(', l1 - 1, l2)
      }
      if (l2 > 0 && l1 < l2) {
        genStr(str + ')', l1, l2 - 1)
      }
    } else {
      arr.push(str)
    }
  }

  genStr(str, len1, len2)

  console.log(arr)
  return arr
}

generateParenthesis(3)
