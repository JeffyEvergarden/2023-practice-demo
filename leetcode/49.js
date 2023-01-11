//  给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

//  字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

//  来源：力扣（LeetCode）
//  链接：https://leetcode.cn/problems/group-anagrams
//  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  const map = {}
  const _abc = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  const abc = {}
  _abc.map((key, i) => {
    abc[key] = i
  })

  strs.forEach((strItem) => {
    let strArr = strItem.split('').sort((a, b) => abc[a] - abc[b])
    let key = strArr.join('')
    console.log(key, strArr)
    if (map[key]) {
      map[key].push(strItem)
    } else {
      map[key] = [strItem]
    }
  })

  return Object.keys(map).map((key) => map[key])
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
