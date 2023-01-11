// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

var subsetsWithDup = function (nums) {
  let len = nums.length - 1
  let result = []
  nums = nums.sort()

  function collect(arr, i, n) {
    result.push([...arr])
    if (i > n) {
      return
    }
    for (let j = i; j <= n; j++) {
      let val = nums[j]

      if (j - 1 >= i && val === nums[j - 1]) {
        continue
      }
      arr.push(val)
      collect(arr, j + 1, n)
      arr.pop()
    }
  }

  collect([], 0, len)

  return result
}
console.log(subsetsWithDup([1, 2, 2, 3, 3, 4]))
