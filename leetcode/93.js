/**
 * 
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/restore-ip-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let str = s.split('')
  let len = str.length
  let result = []

  function collect(curStr, num, i) {
    if (i > len || num > 3) {
      return
    }
    if (i === len && num === 3) {
      result.push(curStr)
      return
    }

    let char = s[i]

    if (i !== 0) {
      curStr += '.'
      num++
    }

    collect(curStr + char, num, i + 1)

    if (len - i >= 1 && char !== '0') {
      char = char + s[i + 1]
      collect(curStr + char, num, i + 2)
    }

    if (len - i >= 2 && s[i] !== '0') {
      char = char + s[i + 2]
      let _val = Number(char)
      if (_val >= 0 && _val < 256) {
        collect(curStr + char, num, i + 3)
      } else {
        return
      }
    }
  }

  collect('', 0, 0)
  return result
}

console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('0000'))
