/**
 * @param {string} s
 * @return {number}
 */
 var generateMatrix = function (n) {
  let arr = new Array(n).fill(null).map((item, i) => {
    let k = i * n
    let _arr = new Array(n).fill(null).map((_item, index) => {
      return k + index + 1
    })
    return _arr
  })

  let i = 0,
    j = 0,
    is = 0,
    id = n - 1,
    js = 0,
    jd = n - 1

  let result = []
  let k = 1
  while (is <= id && js <= jd) {
    while (j <= jd) {
      arr[i][j] = k++
      j++
    }
    is++
    i = is
    j = jd

    while (i <= id) {
      arr[i][j] = k++
      i++
    }
    jd--
    j = jd
    i = id

    while (j >= js) {
      arr[i][j] = k++
      j--
    }
    id--
    i = id
    j = js

    while (i >= is) {
      arr[i][j] = k++
      i--
    }
    js++
    j = js
    i = is
  }

  // console.log(result)

  return arr
}

console.log(generateMatrix(5))
