/**
 * @param {number[]} heights
 * @return {number}
 */

// 暴力破解

var largestRectangleArea2 = function (heights) {
  let len = heights.length
  let i = 0
  let j = len - 1

  function getMinH(l, r) {
    let minH = heights[l]
    while (l <= r) {
      if (heights[l] < minH) {
        minH = heights[l]
      }
      l++
    }
    return minH
  }
  let maxArea = 0
  for (let i = 0; i < len; i++) {
    let start = i
    let l = i
    let r = i
    while (l >= 0 && r < len) {
      let h = getMinH(l, r)
      let w = r - l + 1
      let area = h * w
      maxArea = area > maxArea ? area : maxArea

      if (l > 0 && r <= len - 2) {
        if (heights[l - 1] > heights[r + 1]) {
          l--
        } else {
          r++
          if (heights[r] === 0) {
            break //中断
          }
        }
      } else if (l > 0 && heights[l - 1] > 0) {
        l--
      } else if (r < len - 2 && heights[r + 1] > 0) {
        r++
      } else {
        break
      }
    }
  }

  return maxArea
}

// 优化1
function largestRectangleArea(heights) {
  let stack = []
  let h = heights
  // 暂存占比
  let i = 0
  let len = heights.length

  let maxArea = 0

  while (i < len) {
    let last = stack.length - 1
    if (stack.length === 0) {
      stack.push([h[i], i, 0])
    } else if (h[i] > stack[last][0]) {
      // 单调递增栈
      stack.push([h[i], i, 0])
    } else if (h[i] < stack[last][0]) {
      // 碰到一个小于栈顶元素的。
      // 出栈统计
      // 统计出的元素
      let tmpStack = []
      let w = 1
      let area = 0
      let last = stack.length - 1
      let maxR = i - 1
      while (stack.length && h[i] < stack[last][0]) {
        let tmp = stack.pop()
        tmpStack.push(tmp)
        // 第一个元素的下标 - 最后一个的下标
        let w = maxR - tmp[1] + 1
        area = tmp[0] * w
        if (area > maxArea) {
          maxArea = area
        }
        last = stack.length - 1
      }

      // 记录局部最低点
      let m = i,
        n = i
      while (m - 1 >= 0 && h[m - 1] >= h[i]) {
        m--
      }
      while (n <= len - 2 && h[n + 1] >= h[i]) {
        n++
      }
      area = (n - m + 1) * h[i]
      if (area > maxArea) {
        maxArea = area
      }
      // 元素再次进栈
      stack.push([h[i], i, 0])
    } else if (h[i] === stack[last][0]) {
      stack[last][2] = stack[last][2] + 1
    }
    i++
  }

  let maxR = 0
  if (stack.length) {
    maxR = stack[stack.length - 1][1] + stack[stack.length - 1][2]
  }

  // 剩下的单调递增栈
  while (stack.length) {
    let tmp = stack.pop()
    // 第一个元素的下标 - 最后一个的下标
    let w = maxR - tmp[1] + 1
    area = tmp[0] * w
    if (area > maxArea) {
      maxArea = area
    }
    last = stack.length - 1
  }

  return maxArea
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))

console.log(largestRectangleArea([2, 1, 2]))
