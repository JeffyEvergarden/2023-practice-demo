// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 1 - n 选 n 个数
  let result = []
  let arr = new Array(n).fill(null).map((item, index) => {
    return index + 1
  })

  function collect(a, waitArr, k) {
    if (k === 0) {
      result.push(a)
    }
    if (waitArr.length === 0) {
      return
    }
    for (let i = 0; i < waitArr.length; i++) {
      let newArr = waitArr.slice(i + 1)
      collect([...a, waitArr[i]], newArr, k - 1)
    }
  }

  collect([], arr, k)

  // console.log(result)
  return result
}

// // 生成的数组太多

var combine2 = function (n, k) {
  // 1 - n 选 n 个数
  let result = []

  let arr = []

  function collect(path, cur, n, k) {
    if (k === 0) {
      // 存储结果
      result.push([...path])
      return
    }
    if (cur > n) {
      return
    }

    for (let i = cur; i <= n; i++) {
      collect([...path, i], i + 1, n, k - 1)
    }
  }

  collect([], 1, n, k)
  return result
}

var combine3 = function (n, k) {
  // 1 - n 选 n 个数
  let result = []

  let arr = []

  function collect(path, cur, n, k) {
    if (k === 0) {
      // 存储结果
      result.push([...path])
      return
    }
    if (cur > n) {
      return
    }
    let len = path.length

    for (let i = cur; i <= n; i++) {
      path.push(i)
      collect(path, i + 1, n, k - 1)
      while (path.length > len) {
        path.pop()
      }
    }
  }

  collect([], 1, n, k)
  // console.log(result)
  return result
}

combine3(4, 2)
