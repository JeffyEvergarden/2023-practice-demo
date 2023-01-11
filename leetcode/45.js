//  保证走的下一步能到达最远的距离, 若下一步能达到最远，那它的选择定珲覆盖其他的步


var jump = function (nums) {
  let min = Infinity
  let len = nums.length - 1
  let cur = 0 // 当前位置

  function jumpNext(cur, long) {
    if (cur >= len) {
      if (long < min) {
        min = long
        return
      }
    }
    let val = nums[cur] // 当前可走
    if (val < 1) {
      return
    }
    let record = -1
    let recordMax = -1
    for (let i = 1; i <= val; i++) {
      // 直接找到了
      if (cur + i >= len) {
        min = long + 1
        return
      }
      // 下一个位置可达最远距离
      if (nums[cur + i] + cur + i >= recordMax) {
        recordMax = nums[cur + i] + cur + i
        record = cur + i
      }
    }
    if (record !== -1) {
      jumpNext(record, long + 1)
    }
  }

  jumpNext(0, 0)
  return min
}

let k = jump([2, 3, 1, 1, 4])

console.log(k)
