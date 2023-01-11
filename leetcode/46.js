//  保证走的下一步能到达最远的距离, 若下一步能达到最远，那它的选择定珲覆盖其他的步

var permute = function (nums) {
  let len = nums.length
  let result = []

  function collect(arr, target) {
    if (arr.length === 0) {
      result.push([...target])
      return
    }
    // 去收集下一个结果
    arr.forEach((key) => {
      let newArr = arr.filter((k) => k !== key)

      collect(newArr, [...target, key])
    })
  }

  collect(nums, [])
  return result
}

let k = permute([2, 3, 1, 4])

console.log(k)
