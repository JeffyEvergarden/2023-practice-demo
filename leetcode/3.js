// 不重复字符的字串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

var lengthOfLongestSubstring = function (s) {
  let strArr = s.split('') //  [...s]
  let start = 0
  let map = {}
  let target = ''
  let _start = 0

  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i]

    if ((!map[char] && map[char] !== 0) || _start > map[char]) {
      map[char] = i // 记录该字符位置
      if (i - _start + 1 >= target.length) {
        console.log('--------------------')
        console.log(target)
        target = s.substring(_start, i + 1)
        console.log(_start + '__' + i)
        console.log(target)
      }
    } else {
      _start = map[char] + 1
      map[char] = i
    }
  }
  return target.length
}

console.log(lengthOfLongestSubstring('abcabcbb'))

// ---------------------

var lengthOfLongestSubstring2 = function (s) {
  let strArr = [...s]
  let start = 0
  let map = {}
  let target = ''
  let _start = 0

  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i] // 当前字符

    if ((!map[char] && map[char] !== 0) || _start > map[char]) {
      map[char] = i // 记录该字符位置
      if (i - _start + 1 >= target) {
        target = i - _start + 1
      }
    } else {
      _start = map[char] + 1
      map[char] = i
    }
  }
  return target
}

// t m m z u x t
// 0 1 2 3 4 5 6

var lengthOfLongestSubstring2 = function (s) {
  let strArr = [...s]
  let start = 0
  let map = {}
  let target = 0
  let _start = 0

  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i] // 当前字符

    if ((!map[char] && map[char] !== 0) || _start > map[char]) {
      //合适的值
      map[char] = i
      if (i - _start + 1 >= target) {
        target = i - _start + 1
      }
    } else { // 不合适的值
      _start = map[char] + 1
      map[char] = i
    }
  }
  return target
}
