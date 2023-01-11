/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

//  递归处理
var isInterleave2 = function (s1, s2, s3) {
  let len1 = s1.length
  let len2 = s2.length
  let len3 = s3.length
  if (len1 + len2 !== len3) {
    return false
  }
  let i = 0
  let j = 0
  let k = 0
  s1 = s1.split('')

  s2 = s2.split('')

  function compare(m, n, o) {
    if (m + n > len3) {
      return true
    }
    // flag
    let flag = false
    while (m < len1 && n < len2) {
      // 有分支，取左还是取右呢
      if (s1[m] === s3[o] && s2[n] === s3[o]) {
        flag = true
        break
        // 都不相等
      } else if (s1[m] !== s3[o] && s2[n] !== s3[o]) {
        return false
      } else if (s1[m] === s3[o]) {
        m++
        o++
      } else if (s2[n] === s3[o]) {
        n++
        o++
      }
    }

    if (flag) {
      return compare(m + 1, n, o + 1) || compare(m, n + 1, o + 1)
    }

    while (m < len1) {
      if (s1[m] === s3[o]) {
        m++
        o++
      } else {
        return false
      }
    }
    while (n < len2) {
      if (s2[n] === s3[o]) {
        n++
        o++
      } else {
        return false
      }
    }
    return true
  }

  return compare(0, 0, 0)
}

// 回溯法

var isInterleave = function (s1, s2, s3) {
  let len1 = s1.length
  let len2 = s2.length
  let len3 = s3.length
  if (len1 + len2 !== len3) {
    return false
  }
  let i = 0
  let j = 0
  let k = 0
  s1 = s1.split('')

  s2 = s2.split('')

  let map = []

  function compare(m, n, o) {
    if (m + n > len3) {
      return true
    }
    // flag
    let flag = false
    while (m < len1 && n < len2) {
      // 有分支，取左还是取右呢
      if (s1[m] === s3[o] && s2[n] === s3[o]) {
        flag = true
        break
        // 都不相等
      } else if (s1[m] !== s3[o] && s2[n] !== s3[o]) {
        return false
      } else if (s1[m] === s3[o]) {
        m++
        o++
      } else if (s2[n] === s3[o]) {
        n++
        o++
      }
    }

    if (flag) {
      return compare(m + 1, n, o + 1) || compare(m, n + 1, o + 1)
    }

    while (m < len1) {
      if (s1[m] === s3[o]) {
        m++
        o++
      } else {
        return false
      }
    }
    while (n < len2) {
      if (s2[n] === s3[o]) {
        n++
        o++
      } else {
        return false
      }
    }
    return true
  }

  return compare(0, 0, 0)
}

var isInterleave = function (s1, s2, s3) {
  let len1 = s1.length
  let len2 = s2.length
  let len3 = s3.length
  console.log(len1, len2, len3)
  if (len1 + len2 !== len3) {
    return false
  }
  let i = 0
  let j = 0
  let k = 0
  s1 = s1.split('')

  s2 = s2.split('')

  let map = new Array(len1 + 1).fill(null).map((item) => {
    return new Array(len2 + 1).fill(false)
  })

  let hasmap = new Array(len1 + 1).fill(null).map((item) => {
    return new Array(len2 + 1).fill(false)
  })

  map[0][0] = true
  hasmap[0][0] = true

  function compare(m, n) {
    if (m + n > len3) {
      map[m][n] = false
      return false
    }
    if (m < 0 || n < 0) {
      return true
    }
    if (hasmap[m][n]) {
      return map[m][n]
    }

    let val = compare(m - 1, n) && m > 0 && s1[m - 1] === s3[m + n - 1]
    let val2 = compare(m, n - 1) && n > 0 && s2[n - 1] === s3[m + n - 1]
    map[m][n] = val || val2
    hasmap[m][n] = true
    return map[m][n]
  }

  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      let flag = compare(i, j)
      if (i + j === len3 && flag) {
        return true
      }
    }
  }

  return false
}

// ---------
console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))

console.log(isInterleave('', '', ''))

console.log(isInterleave('12', '34', '1334'))
