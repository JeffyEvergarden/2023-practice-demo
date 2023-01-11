// F(i, n) = G(i-1) * G（n -i-1)

// G(n) = 1~n 的  F(i,n) 相加
// G（n）= G（0）* G(2) + G(1)* G(n-3) + G(n-1)* G(-1)

var numTrees = function (n) {
  const map = {
    1: 1
  }

  function dfs(l, r) {
    if (l > r) {
      return 1
    }

    let val = r - l + 1

    if (map.hasOwnProperty(val)) {
      return map[val]
    }

    let ans = 0
    for (let i = l; i <= r; i++) {
      let arrLeft = dfs(l, i - 1)
      let arrRight = dfs(i + 1, r)

      ans = ans + arrLeft * arrRight
    }
    map[val] = ans
    return ans
  }

  for (let i = 1; i <= n; i++) {
    dfs(1, i)
  }

  return map[n]
}

console.log(numTrees(18))
