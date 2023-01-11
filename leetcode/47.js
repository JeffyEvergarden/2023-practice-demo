// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

var permuteUnique = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let len = nums.length
  let result = []

  function collect(arr, target) {
    if (arr.length === 0) {
      result.push([...target])
      return
    }
    // 去收集下一个结果
    arr.forEach((key, index) => {
      let newArr = arr.filter((k, i) => i !== index)

      if (index > 0 && arr[index] === arr[index - 1]) {
      } else {
        collect(newArr, [...target, key])
      }
    })
  }

  collect(nums, [])
  return result
}

let k = permuteUnique([2, 3, 1, 1, 4])

console.log(k)
