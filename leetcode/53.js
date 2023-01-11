/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
// 长度为n 0 ～ n-1 个节点

var maxSubArray = function (nums) {
  //
  let sum = 0
  let len = nums.length
  if (len === 0) {
    return 0
  }

  let maxAns = new Array(len).fill(null)
  // 以 第 i 个节点结尾的节点 和 以 第 i-1 个节点结尾巴的节点的关系
  // f(i) 表示以 第 i 个节点为结尾的节点的最大数 必须包含第i个节点
  // 这样 f(i) = Max （f(i-1) + nums[i],   nums[i])
  // f(0) = nums[0]
  // 所以 得到 f(1) ----> f(n-1)的值

  // f(i)  = f(i-1)
  // maxAns[i] = MaxAns[i - 1] + nums[i]

  function getMaxAns(i) {
    if (maxAns[i] !== null) {
      return maxAns[i]
    }

    if (i === 0) {
      maxAns[0] = nums[0]
      return nums[0]
    } else {
      maxAns[i] = Math.max(getMaxAns(i - 1) + nums[i], nums[i])
      return maxAns[i]
    }
  }

  for (let i = 0; i < len; i++) {
    getMaxAns(i)
  }
  let max = maxAns[0]
  for (let i = 0; i < len; i++) {
    if (max < maxAns[i]) {
      max = maxAns[i]
    }
  }
  return max
}

// 太难算了  --- 放弃
var maxSubArray2 = function (nums) {
  let len = nums.length
  let i = 0
  let j = i + 1

  if (len === 0) {
    return 0
  }

  if (len === 1) {
    return nums[0]
  }

  // 先进行区间合并
  while (i < len && j < len) {
    if (nums[i] >= 0 && nums[j] >= 0) {
      nums[i] = nums[i] + nums[j]
      nums[j] = 0
      j++
    } else if (nums[i] > 0 && nums[j] < 0) {
      i = j
      j++
    } else if (nums[i] < 0 && nums[j] < 0) {
      nums[i] = nums[i] + nums[j]
      nums[j] = 0
      j++
    } else if (nums[i] < 0 && nums[j] >= 0) {
      i = j
      j++
    }
  }
  nums = nums.filter((item) => item !== 0)

  len = nums.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return nums[0]
  }

  //  n 时间度  合并
  //  2n 时间度 过滤
  // [  3, -3, 3, -2, 5, -5, 4]
  // 总大小
  let sum = nums.reduce((a, b) => a + b, 0)
  let sumMax = sum
  i = 0
  j = len - 1
  // i向右走
  // 到现在会变得一正一负交替
  let start = a[0] > a[1] ? 0 : 1

  for (let k = start; k < len; k++) {
    let sum = nums[k]
    i = k - 2
    j = k + 2
    // 向左奢求最大值
    while (i >= 0) {
      if (sum > nums + [k - 1] + nums[k - 2]) {
      }
    }
    // 向右奢求最大值
    while (j < len) {}
  }

  return sumMax
}

console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]))
// [  3, -3, 3, -2, 5, -5, 4]
