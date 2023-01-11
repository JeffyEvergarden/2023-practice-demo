// 28. 实现 strStr()  kmp 算法

// 原生函数
var strStr2 = function (haystack, needle) {
  return haystack.indexOf(needle)
}

// 暴力破解
var strStr1 = function (haystack, needle) {
  let m = haystack.length
  let n = needle.length
  for (let i = 0; i < m - n; i++) {
    let j = 0
    for (j = 0; j < n; j++) {
      if (haystack[j + i] !== needle[j]) {
        break
      }
    }
    if (j === n) {
      return i
    }
  }
}

// console.log(strStr1('hello', 'll'))

// kmp

function kmpStr(str, s) {
  let next = getNext(s)  // next数组
  



}

// 获取next数组
function getNext(str) {
  let len = str.length
  let next = new Array(len).fill(-1)
  let j = -1
  next[0] = -1
  for (let i = 1; i < len; i++) {
    console.log(j + 1, i, str[j + 1], str[i])
    if (str[j + 1] === str[i]) {
      j++
      next[i] = j
    } else if (str[j + 1] !== str[i]) {
      // 回退重新算
      j = -1
      if (str[j + 1] === str[i]) {
        j++
      }
      next[i] = j
    }
  }
  return next
}

console.log(getNext('abababab'))
