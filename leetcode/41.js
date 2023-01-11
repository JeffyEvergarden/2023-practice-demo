// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let len = nums.length

  function swap(a, b) {
    if (nums[a] === nums[b] || a === b) {
      return false
    }
    let tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
    return true
  }

  // 1 ~ nums.length
  for (let i = 0; i < len; i++) {
    while (nums[i] <= len && nums[i] > 0) {
      let val = nums[i] // 这个数它应该放在 nums[i] - 1 的位置
      // 交换 [val -1] [i] 的值  如果val -1 === i 陷入死循环
      // 
      let flag = swap(val - 1, i) // 交换两个位置
      if (!flag) {
        break
      }
    }
  }
  console.log(nums)
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return nums.length + 1
}

let k = firstMissingPositive([1, 1])
console.log(k)

// [-1, 4, 3, 1]
// [-1, 1, 1, 4]
