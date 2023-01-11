// 删除数组的重复元素

var removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return nums.length
  }

  let j = 0
  let arr = nums
  for (let i = 1; i < nums.length; i++) {
    // 相等跳过
    if (arr[j] === arr[i]) {
    } else {
      arr[j + 1] = arr[i]
      j++
    }
  }
  console.log(j, nums)
  return j + 1
}

removeDuplicates([1, 1, 2])

