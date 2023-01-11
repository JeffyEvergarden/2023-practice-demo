// n位格雷编码

// 2位 ----> 四个 （0 ~ 2） 组成数组序列 ---> 11 ---> 03
// 3位  ----> 8个（ 0 ~ 4）组成数组序列 ---> 111 ----> 0~7

var grayCode = function (n) {
  if (n === 1) {
    return [0, 1]
  }

  // 数值大小是 0 -> max
  let arr = grayCode(n - 1)
  let newArr = arr
    .map((item) => {
      return item + Math.pow(2, n - 1)
    })
    .reverse()
  newArr = arr.concat(newArr)
  return newArr
}
console.log(grayCode(3))
