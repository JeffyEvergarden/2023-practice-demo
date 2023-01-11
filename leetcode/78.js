var subsets = function (nums) {
  let result = []
  let len = nums.length

  function collect(path, cur, n, k) {
    // 存储结果
    result.push([...path])

    if (cur > n) {
      return
    }
    let len = path.length

    for (let i = cur; i <= n; i++) {
      path.push(nums[i])
      collect(path, i + 1, n, k - 1)
      while (path.length > len) {
        path.pop()
      }
    }
  }

  collect([], 0, len - 1, len)

  // console.log(result)
  return result
}

subsets([1, 2, 3, 4])
