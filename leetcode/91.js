var numDecodings2 = function (s) {
  s = s.toString()
  const map = {}
  const mapStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let num = 0
  mapStr.split('').forEach((key, i) => {
    map[i + 1] = key
  })

  let len = s.length - 1

  function collect(i) {
    if (i > len) {
      num++
      return
    }
    let val = s[i]
    if (map[val]) {
      collect(i + 1)
    }
    if (i + 1 <= len) {
      val = val + s[i + 1]
      map[val] && collect(i + 2)
    }
  }
  collect(0)
  return num
}

var numDecodings = function (s) {
  s = s.toString()
  const map = {}
  const mapStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  mapStr.split('').forEach((key, i) => {
    map[i + 1] = key
  })

  let len = s.length - 1

  let arr = new Array(len + 1).fill(0) // 单存在
  let arr2 = new Array(len + 1).fill(0) // 双存在

  arr[0] = map[s[0]] ? 1 : 0
  // console.log(s[0], arr,len)

  function collect(i) {
    let key = s[i]

    if (map[key]) {
      // 存在
      arr[i] = arr[i - 1] + arr2[i - 1]
    } else {
      // 不存在 则为 0
      arr[i] = 0
    }

    if (i < 1) {
      return
    }

    let key2 = s[i - 1] + s[i] //

    if (map[key2]) {
      // 可以达成双结尾
      // 存在
      arr2[i] = arr[i - 1]
    }
  }

  for (let i = 1; i <= len; i++) {
    collect(i)
  }

  return arr[len] + arr2[len]
}
console.log(numDecodings('12')) // 2 / 1、2  / 12

console.log(numDecodings('226')) // 3 /2、2、6 / 2、2、6 / 2、2、6

console.log(numDecodings('10')) // 1

console.log(numDecodings('00')) // 0

console.log(numDecodings('2101')) // 1  / 2、10、 1

// 1、1、2  // 11、2 // 1、12

console.log(numDecodings('1123')) // 5 / 1、1、2、3  / 11、2、3 / 11、23 /1、12、3 / 1、1、23

// console.log(numDecodings('111111111111111111111111111111111111111111111'))
