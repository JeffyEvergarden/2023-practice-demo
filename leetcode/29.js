// 两数相除
// 解题思路
// https://leetcode.cn/problems/divide-two-integers/solution/by-i3lissful-devvdney-mkao/

// 100  -9
// 100  -11   1

// 32 位  -2^31 ~ 2^31 -1
function divide(dividend, divisor) {
  // 整型溢出
  if (dividend == -0x80000000 && divisor == -1) {
    return 0x80000000 - 1
  }
  if (divisor == 0) {
    return 0x80000000 - 1
  }

  // 不能转成用整数求， -2^31 会溢出
  let nums = 2
  if (dividend > 0) {
    nums--
    dividend = -dividend
  }
  if (divisor > 0) {
    nums--
    divisor = -divisor
  }

  let val = divideCode2(dividend, divisor)

  return nums === 1 ? -val : val
}

// -100、 -9
function divideCode(dividend, divisor) {
  let ans = 0
  // -11      -9
  while (dividend <= divisor) {
    ans++
    dividend = dividend - divisor
  }

  return ans
}

//
console.log(divide(18, -9)) // 11

// 优化算法 加入指数

function divideCode2(dividend, divisor) {
  let ans = 0
  // -100      -9
  while (dividend <= divisor) {
    let q = 1
    let value = divisor
    // 指数增长去算 * 2 倍 若 2倍的value > 除数 则停止
    while (dividend < value + value) {
      // * 2
      q = q + q
      value = value + value
    }
    dividend = dividend - value
    ans += q
  }

  return ans
}

// 优化算法  处理边界
// 如果数值是 divisor = 2^30 那在 2^30 * 2 = 2^31 会溢出

function divideCode3(dividend, divisor) {
  let ans = 0
  // -100      -9
  while (dividend <= divisor) {
    let q = 1
    let value = divisor
    // 指数增长去算 * 2 倍 若 2倍的value > 除数 则停止
    while (value > -Math.pow(2, 30) && dividend < value + value) {
      // * 2
      q = q + q
      value = value + value
    }
    dividend = dividend - value
    ans += q
  }

  return ans
}
