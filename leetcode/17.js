// 17. 电话号码的字母组合

let map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

var letterCombinations = function (digits) {
  let arr = digits.split('')
  let length = arr.length
  let collection = []

  function collect(str, len) {
    // 如果长度符合了
    if (len > length - 1) {
      // 避免输出 ''
      str && collection.push(str)
      return
    }
    let val = arr[len]

    let _arr = map[val] || []

    if (_arr.length === 0) {
      collect(str, len + 1)
    } else {
      _arr.forEach((key) => {
        collect(str + key, len + 1)
      })
    }
  }

  collect('', 0)
  return collection
}

console.log(letterCombinations('23'))
