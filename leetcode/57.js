/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

//  给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

//  在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

//  来源：力扣（LeetCode）
//  链接：https://leetcode.cn/problems/insert-interval
//  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var insert = function (intervals, newInterval) {
  let arr = intervals
  let start = newInterval[0]
  let end = newInterval[1]
  let len = arr.length
  let i = 0

  let newArr = []
  if (len === 0) {
    return [newInterval]
  }

  while (i < arr.length) {
    let cur = arr[i]

    // console.log([start, end], cur, i)
    // 完全没有交集
    if (start > cur[1]) {
      newArr.push(cur)
      i++
    } else if (end < cur[0]) {
      // 完全没有交集
      newArr.push([start, end])
      let _arr = arr.slice(i)
      newArr = newArr.concat(_arr)
      break
    } else if (start <= cur[1] && start >= cur[0]) {
      end = Math.max(end, cur[1])
      start = cur[0]
      i++
    } else if (end <= cur[1] && end >= cur[0]) {
      end = cur[1]
      start = Math.min(start, cur[0])
      i++
    } else if (start <= cur[0] && end > cur[1]) {
      i++
    }
    if (i === len) {
      newArr.push([start, end])
    }
  }

  return newArr
}

console.log(
  insert(
    [
      [1, 3],
      [6, 9]
    ],
    [2, 5]
  )
)

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16]
    ],
    [4, 8]
  )
)
