// 2进制求和

var addBinary = function (a, b) {
  a = a.split('').map((it) => Number(it))
  b = b.split('').map((it) => Number(it))

  let m = a.length
  let n = b.length

  let len = Math.abs(m - n)
  let zeroArr = new Array(len).fill(0)
  if (m > n) {
    b = zeroArr.concat(b)
  } else if (n > m) {
    a = zeroArr.concat(a)
  }

  len = a.length - 1

  let up = 0
  let target = new Array(len + 1).fill(0)
  for (let i = len; i >= 0; i--) {
    let num = a[i] + b[i] + up
    if (num === 3) {
      up = 1
      target[i] = 1
    } else if (num === 2) {
      up = 1
      target[i] = 0
    } else if (num === 1) {
      up = 0
      target[i] = 1
    } else if (num === 0) {
      up = 0
      target[i] = 0
    }
  }
  if (up === 1) {
    target.splice(0, 0, up)
  }
  return target.join('')
}

console.log(addBinary('11', '1'))
