/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {


  let result = []
  let len = nums.length
  var _nums = nums.sort((a, b) => a - b)
  let map = {}

  for (let i = 0; i < _nums.length - 2; i++) {
      if (i > 0 && _nums[i] === _nums[i - 1]) { // 重复跳过
          continue
      }
      let l = i + 1, r = len - 1
      while (l < r) {
          const val = _nums[i] + _nums[l] + _nums[r];

          if (val === 0) {

              if (!map[`${_nums[i]}_${nums[l]}`]) {
                  result.push([_nums[i], _nums[l], _nums[r]]);
                  map[`${_nums[i]}_${nums[l]}`] = true
              }
              l++;
              r--;
              ;
          } else if (val < 0) {
              l++;
          } else {
              r--;
          }
      }
  }
  return result
};