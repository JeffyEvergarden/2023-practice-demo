// 删除数组的重复元素

var removeDuplicates = function (nums, val) {
  let j = 0
  let arr = nums
  for (let i = 0; i < nums.length; i++) {
    // 相等跳过
    if (arr[i] === val) {
    } else {
      arr[j] = arr[i]
      j++
    }
  }
  console.log(nums , j);
  return j
}

removeDuplicates([1, 1, 2], 1)
