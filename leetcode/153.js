var findMin = function (nums) {
  let min = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
      return min;
    }
  }
  return min;
};