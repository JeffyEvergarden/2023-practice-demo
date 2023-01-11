// 越前的越优先

function redPackage(total, num) {
  let arr = []
  let min = 0.01
  if (min * num > total) {
    return false
  }

  return () => {
    // 红包满了
    if (arr.length > num) {
      return 0
    }
    // 剩下个数
    let last = num - arr.length

    let val = min
    let lastMon = total // 剩余钱

    // 应给的钱 保留2位小数
    val = Number((Math.random() * total).toFixed(2))
    if (val <= min) {
      val = min
    } else if (val > total - min) {
      val = toal - min
    }
    total = total - val
    arr.push(val)
    return val
  }
}

let redPack = redPackage(200, 10)

if (!redPack) {
  console.log('不够分')
} else {
  let val = redPack()
  let arr = []
  while (val !== 0) {
    arr.push(val)
    val = redPack()
  }
  console.log(arr)
}
