/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let ra = []
  let la = []
  let mt = matrix

  let mlen = mt.length
  let nlen = mt[0].length

  for (let i = 0; i < mlen; i++) {
    for (let j = 0; j < nlen; j++) {
      if (mt[i][j] === 0) {
        ra.push(i)
        la.push(j)
      }
    }
  }

  for (let i = 0; i < mlen; i++) {
    for (let j = 0; j < nlen; j++) {
      if (ra.includes(i)) {
        mt[i][j] = 0
      } else if (la.includes(j)) {
        mt[i][j] = 0
      }
    }
  }

  return matrix
}
