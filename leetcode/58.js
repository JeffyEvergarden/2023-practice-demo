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
};