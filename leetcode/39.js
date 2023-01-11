/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = []
  candidates = candidates.sort((a, b) => a - b)
  // 待选、目标、已选
  function collect(arr, target, _arr) {
    //
    let sum = _arr.reduce((a, b) => a + b, 0)

    for (let i = arr.length - 1; i >= 0; i--) {
      let val = arr[i]
      if (sum + val > target) {
        continue
      } else if (sum + val === target) {
        result.push([..._arr, val])
      } else if (sum + val < target) {
        let newArr = arr.slice(0, i + 1)
        collect(newArr, target, [..._arr, val])
      }
    }
  }
  collect(candidates, target, [])

  return result
}

let result = combinationSum([2, 3, 5], 8)

// 每次收集得加个限制，下次选择得选比自己当前选择要小得值

console.log(result)
