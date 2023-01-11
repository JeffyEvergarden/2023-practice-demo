/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cur = 0

  let len = nums.length - 1

  let flag = false

  function jumpNext(cur, long) {
    console.log('当前位置', cur, '第' + long + '次')
    if (cur >= len) {
      flag = true
      return
    }
    let val = nums[cur]
    if (val === 0) {
      return
    }
    let maxi = 1
    let maxLen = cur
    for (let i = 1; i <= val; i++) {
      // 当前位置就能跳到终点
      if (cur + i >= len) {
        flag = true
        return
      }
      // 当前位置跳到下一个位置的可达最远距离
      if (cur + i + nums[cur + i] > maxLen) {
        maxi = i
        maxLen = cur + i + nums[cur + i]
      }
    }
    jumpNext(cur + maxi, long + 1)
  }
  jumpNext(0, 0)

  return flag
}
// console.log(canJump([2, 3, 1, 1, 4]))

console.log(canJump([3, 0, 8, 2, 0, 0, 1]))
