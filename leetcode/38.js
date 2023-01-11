/**
 * @param {number} n
 * @return {string}
 */
// 外观数列

var countAndSay = function (n) {
  if (n == 1) {
    return '1'
  }
  // 获取字符串输出
  let val = countAndSay(n - 1)

  return genString(val)
}

function genString(numberStr) {
  let str = numberStr.split('')
  let i = 0
  let nums = 1
  let result = ''
  // console.log(str)
  while (i <= str.length) {
    // 统计个数
    if (i === str.length - 1) {
      result = result + nums + str[i]
    } else if (str[i] !== str[i + 1]) {
      // 汇总
      result = result + nums + str[i]
      nums = 1
    } else {
      nums++
    }
    // console.log(result)
    i++
  }
  return result
}

console.log(countAndSay(4)) // 11121112
