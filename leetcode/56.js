var merge2 = function (intervals) {
  let arr = intervals.sort((a, b) => a[0] - b[0])
  console.log(arr)
  let i = 1
  let start = arr[0][0]
  let end = arr[0][1]
  while (i < arr.length) {
    let currentArr = arr[i]
    if (currentArr[1] <= end) {
      arr.splice(i, 1)
    } else if (currentArr[0] > end) {
      start = currentArr[0]
      end = currentArr[1]
      i++
    } else if (currentArr[0] <= end) {
      end = Math.max(currentArr[1], end)
      arr.splice(i - 1, 2, [start, end])
    }
  }
  console.log(arr)
  return arr
}

var merge = function (list) {
  // 先排序
  list = list.sort((m, n) => m[0] - n[0])
  let i = 1
  let start = list[0][0]
  let end = list[0][1]
  // 遍历
  while (i < list.length) {
    let currentArr = list[i]
    // 前者包含了后者(包含关系)
    if (currentArr[1] <= end) {
      list.splice(i, 1) // 删除当前
      //
      // 无交集关系    前者和后者有间距
    } else if (currentArr[0] > end) {
      start = currentArr[0]
      end = currentArr[1]
      i++
      // 存在交集
    } else if (currentArr[0] <= end) {
      end = Math.max(currentArr[1], end)
      list.splice(i - 1, 2, [start, end])
    }
  }
  console.log(list)
  return list
}

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
])
