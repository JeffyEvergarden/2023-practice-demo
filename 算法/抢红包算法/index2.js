// 稍微公平的
function floor(val) {
  return Number((Math.floor(val * 100) / 100).toFixed(2))
}

function redPackage(total, num) {
  let arr = []
  let min = 0.01
  if (min * num > total) {
    return false
  }

  let avg = floor(total / num)

  while (arr.length < num) {
    let aval = floor(avg + Math.random() * avg)
    let bval = floor(2 * avg - aval)

    if (arr.length + 1 === num) {
      arr.push(total)
    } else if (arr.length + 2 === num) {
      let aval = floor(avg + Math.random() * avg)
      let bval = floor(total - aval)
      arr.push(aval, bval)
    } else if (arr.length + 2 < num) {
      arr.push(aval, bval)
      total = total - aval - bval
    }
  }

  return arr
}

let redPack = redPackage(200, 10)

if (!redPack) {
  console.log('不够分')
} else {
  console.log(redPack)
  let sum = 0
  redPack.forEach((item) => {
    sum = sum + item
  })
  console.log(sum)
}
