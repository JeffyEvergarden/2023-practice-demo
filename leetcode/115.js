// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

// 题目数据保证答案符合 32 位带符号整数范围。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/distinct-subsequences
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let num = 0

  let sArr = s.split('')
  let tArr = t.split('')
  let slen = s.length
  let tlen = t.length

  function dfs(i, j) {
    if (i >= slen || j >= tlen) {
      return
    }

    if (sArr[i] === tArr[j]) {
      if (j == tlen - 1) {
        // 表示通过了最后的考验
        num++
      }
      // 表示选取
      dfs(i + 1, j + 1)
      // 表示不选取
      dfs(i + 1, j)
    } else {
      dfs(i + 1, j)
    }
  }

  dfs(0, 0)

  return num
}