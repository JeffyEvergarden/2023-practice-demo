// 最接近的三数之和

var threeSum = function (nums, target) {
  let arr = nums.sort((a, b) => a - b)
  if (arr.length < 3) {
    return 0
  }
  let a = 0

  let l = arr.length - 1

  function abs(a1, b1, c1) {
    // console.log(a1, b1, c1, d1)
    let val = arr[a1] + arr[b1] + arr[c1]
    return val
  }

  let o = Infinity // 最小间距
  let _val = abs(arr[0], arr[1], arr[2]) // 初值

  for (let a = 0; a <= l - 2; a++) {
    let b = a + 1
    let c = l
    // 开始mid
    let _mid = Math.abs(abs(a, b, c) - target)

    while (b < c) {
      let val = abs(a, b, c)
      let mid = Math.abs(val - target) // 当前间距
      if (val === target) {
        return val // 直接找到值
      } else if (val > target) {
        if (mid < o) {
          // 间距缩小
          _val = val
          o = mid
        } else if (mid > _mid) {
          break
        }
        c--
      } else if (val < target) {
        if (mid < o) {
          // 间距缩小
          _val = val
          o = mid
        } else if (mid > _mid) {
          break
        }
        b++
      }
    }
  }
  console.log('----------------')

  return _val
}

var threeSum = function (nums, target) {
  let arr = nums.sort((a, b) => a - b)
  if (arr.length < 3) {
    return 0
  }
  let a = 0

  let l = arr.length - 1

  function abs(a1, b1, c1) {
    // console.log(a1, b1, c1, d1)
    let val = arr[a1] + arr[b1] + arr[c1]
    return val
  }

  let o = Infinity // 最小间距
  let _val = abs(arr[0], arr[1], arr[2]) // 初值

  for (let a = 0; a <= l - 2; a++) {
    let b = a + 1
    let c = l

    while (b < c) {
      let val = abs(a, b, c)
      let mid = Math.abs(val - target) // 当前间距
      if (val === target) {
        return val // 直接找到值
      } else if (val > target) {
        if (mid < o) {
          // 间距缩小
          _val = val
          o = mid
        }
        c--
      } else if (val < target) {
        if (mid < o) {
          // 间距缩小
          _val = val
          o = mid
        }
        b++
      }
    }
  }
  console.log('----------------')

  return _val
}
console.log(threeSum([2, 2, 2, 2, 2], 8))
