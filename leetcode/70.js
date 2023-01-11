var climbStairs = function (n) {
  const arr = [0]
  function arrive(n) {
    if (n <= 3) {
      arr[n] = n
      return n
    }
    if (arr[n]) {
      return arr[n]
    }
    arr[n] = arrive(n - 1) + arrive(n - 2)
    return arr[n]
  }

  for (let i = 1; i <= n; i++) {
    arrive(i)
  }
  return arr[n]
}

console.log(climbStairs(44))
