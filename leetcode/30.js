// 串联所有单词的子串
// 单词hash --> 单词到个数
// 如何判断 一个字符串是否是上述单词排列组合 （判断他们单词hash个数）

// 方法一
function findSubstring(s, words) {
  let len = s.length // 字符串长度
  let m = words.length // 数组个数
  let n = words[0].length // 每个字符串长度
  let arr = [] // 收集结果

  let everyLen = m * n

  let normalMap = {} // 哈希个数
  words.forEach((key) => {
    if (normalMap[key]) {
      normalMap[key] = normalMap[key] + 1
    } else {
      normalMap[key] = 1
    }
  })
  let keys = Object.keys(normalMap)

  console.log('normalMap:', normalMap, everyLen)

  let i = 0 // 滑动窗口

  for (let i = 0; i < len; i++) {
    // 字符个数
    if (i + everyLen > len) {
      break
    }
    let str = s.slice(i, i + everyLen) // 当前字符长度
    console.log('当前字符串：', str)
    let flag = collect(normalMap, str, n)
    if (flag) {
      arr.push(i)
    }
  }

  return arr
}

function collect(map, s, len) {
  let hashMap = {}
  let i = 0
  while (i < s.length) {
    let str = s.slice(i, i + len)
    if (!map[str]) {
      // 如果该单词不存在直接return
      // console.log(i, ': break')
      return false
    } else {
      // 单词存在，进行统计
      if (hashMap[str]) {
        hashMap[str] = hashMap[str] + 1
      } else {
        hashMap[str] = 1
      }
    }
    i = i + len
  }
  // console.log(s, hashMap)
  let keys = Object.keys(map)
  for (let j = 0; j < keys.length; j++) {
    if (hashMap[keys[j]] !== map[keys[j]]) {
      return false
    }
  }

  return true
}

console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']))
