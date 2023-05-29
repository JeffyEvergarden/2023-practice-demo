/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  s = s.split(' ')
  s = s.filter((s) => s !== ' ')
  let str = s[s.length - 1]
  let reg = /[A-Za-z\-]/
  let strArr = str.split('')
  let len = 0
  strArr.forEach((k) => {
    if (reg.test(k)) {
      len++
    }
  })
  return len
}

let a = 'Hello World %%%'

var lengthOfLastWord2 = function (s) {
  s = s.trim()
  let reg = /(\w)+$/

  let arr = reg.exec(s)
  console.log(arr);
  return arr && arr[0] || null;
}

lengthOfLastWord2(a)