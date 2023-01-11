var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ''
  }
  let str1 = strs[0]
  let target = ''

  function test(arr, str) {
    let index = arr.findIndex((item) => {
      return !item.startsWith(str)
    })
    return index < 0
  }
  let str = ''
  while (true) {
    let flag = test(strs, str1)
    if (flag) {
      str = str1
      break
    } else if (str1.length <= 1) {
      break
    } else {
      str1 = str1.slice(0, -1)
    }
  }
  return str
}

console.log(longestCommonPrefix(['123', '12', '123455']))
