// 60. 排列序列
// 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。

// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

let map = {}

function getDeepN(n) {
  // 如果有缓存的值
  if (map[n]) {
    return map[n]
  }
  if (n <= 1) {
    return 1
  }
  map[n] = n * getDeepN(n - 1)
  return map[n]
}
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  // 数组 总共n位
  let ziArr = new Array(n).fill(null).map((item, index) => index + 1)

  console.log(ziArr)

  let result = []
  let i = 0
  while (i < n) {
    if (k === 0) {
      result.push(...ziArr.reverse())
      break
    }

    let len = ziArr.length
    // 第几个数组
    let cur = parseInt(k / getDeepN(len - 1))
    // 有除不尽
    if (k % getDeepN(len - 1) > 0) {
      cur++
    }
    let val = ziArr[cur - 1]
    result.push(val)
    // console.log('--------------------')
    // console.log('当前k应取:', k)
    // console.log('当前数组:', [...ziArr])
    // console.log('当前应取数组:', val)
    // console.log('当前结果:', result.join(''))
    ziArr.splice(cur - 1, 1)
    k = k % getDeepN(len - 1)
    i++
  }

  return result.join('')
}

console.log(getPermutation(4, 10))

// 1      1 2 3 4
// 2      1 2 4 3
// 3      1 3 2 4
// 4      1 3 4 2
// 5      1 4 2 3
// 6      1 4 3 2
// 7      2 1 3 4
// 8      2 1 4 3
// 9      2 3 1 4
// 10     2 3 4 1
