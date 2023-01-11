/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// 四数之和

var fourSum = function (nums, target) {
  let o = []
  let map = {}
  let arr = nums.sort((a, b) => a - b)
  if (arr.length < 4) {
    return []
  }
  let a = 0
  let b = 1

  let l = arr.length - 1

  function abs(a1, b1, c1, d1) {
    // console.log(a1, b1, c1, d1)
    let val = arr[a1] + arr[b1] + arr[c1] + arr[d1]
    if (val === target) {
      let key = `${arr[a1]}_${arr[b1]}_${arr[c1]}_${arr[d1]}`
      if (map[key]) {
        // continue
      } else {
        o.push([arr[a1], arr[b1], arr[c1], arr[d1]])
        map[key] = true
      }
    }
    return val
  }

  for (let a = 0; a <= l - 3; a++) {
    for (let b = a + 1; b <= l - 2; b++) {
      let c = b + 1
      let d = l
      while (c < d) {
        let val = abs(a, b, c, d)
        if (val === target) {
          if (c + 1 < d && arr[c + 1] === arr[c]) {
            c++
          } else if (d - 1 > c && arr[d - 1] === arr[d]) {
            d--
          } else {
            c++
            d--
          }
        } else if (val > target) {
          d--
        } else if (val < target) {
          c++
        }
      }
    }
  }
  console.log('----------------')
  console.log(o)
  return o
}

fourSum([2, 2, 2, 2, 2], 8)

// -2、 -1、0、0、1、2
// [-2, -1, 1, 2] [-2,0,0,2]  [-1,0,0,1]
// -2、-1、0
//
