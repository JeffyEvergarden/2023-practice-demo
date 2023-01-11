/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = []
  candidates = candidates.sort((a, b) => a - b)
  // 待选、目标、已选
  function collect(arr, target, _arr) {
    //
    let sum = _arr.reduce((a, b) => a + b, 0)

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i]
      if (i > 0 && arr[i - 1] === val) {
        continue
      }
      if (sum + val > target) {
        break
      } else if (sum + val === target) {
        result.push([..._arr, val])
      } else if (sum + val < target) {
        let newArr = arr.slice(i + 1, arr.length)
        collect(newArr, target, [..._arr, val])
      }
    }
  }
  collect(candidates, target, [])

  return result
}

let result = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)

// 排序  - 减去重复的
// 关键语句
// if (i > 0 && arr[i - 1] === val) {
//   continue
// }

console.log(result)
