var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let len = nums.length
  let i = 0
  let num = 0
  let target = nums[0]
  while (i < nums.length) {

    if (nums[i] === target) {
      num++
      if (num > 2) {
        nums.splice(i, 1)
      } else {
        i++
      }
    } else {
      num = 1
      target = nums[i]
      i++
    }
  }
  console.log(nums.length)
  return nums.length
}

removeDuplicates([1, 1, 1, 2, 2, 3])
