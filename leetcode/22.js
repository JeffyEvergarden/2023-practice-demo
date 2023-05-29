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



function generateParenthesis2(num) {
  let result = []

  function gen(str, l, r) {
    if (l < 0 || r < 0) {
      return
    }
    if (l === 0 && r === 0) {
      result.push(str)
    }

    if (l > 0) {
      gen(str + '(', l - 1, r)
    }

    if (r > l) {
      gen(str + ')', l, r - 1)
    }
  }

  gen('(', num - 1, num)

  return result
}


console.log(generateParenthesis2(3))