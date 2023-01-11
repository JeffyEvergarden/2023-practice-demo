// 两数之和

var twoSum = function (nums, target) {
  let arr = []
  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        arr[0] = i
        arr[1] = j
        return arr
      }
    }
  }
  return []
}

// 三数和的写法不行 【3，3】 6  ===> map 重复
var twoSum = function (nums, target) {
  if (nums.length < 2) {
    return []
  }
  let map = {}
  nums.forEach((item, i) => {
    map[item] = i
  })
  console.log(map)

  nums.sort((a, b) => a - b)
  // [2,3,4]
  console.log(nums)

  let i = 0,
    j = nums.length - 1

  while (i < j) {
    if (nums[i] + nums[j] === target) {
      let a = nums[i]
      let b = nums[j]

      console.log(map[a], map[b])
      return [map[a], map[b]]
    } else if (nums[i] + nums[j] < target) {
      i++
    } else if (nums[i] + nums[j] > target) {
      j--
    } else {
      break
    }
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
