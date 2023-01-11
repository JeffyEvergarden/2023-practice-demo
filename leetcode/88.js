// 插入排序
var merge2 = function (nums1, m, nums2, n) {
  let j = 0

  for (let i = 0; i < n; i++) {
    let val = nums2[i]
    while (j < m + i) {
      if (nums1[j] < val) {
        j++
      } else {
        break
      }
    }
    nums1.splice(j, 0, val)
    nums1.length = nums1.length - 1
  }

  return nums1
}

var merge = function (nums1, m, nums2, n) {
  let len = m + n - 1
  m--
  n--
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[len] = nums1[m]
      m--
      len--
    } else {
      nums1[len] = nums2[n]
      n--
      len--
    }
  }
  while (m >= 0) {
    nums1[len] = nums1[m]
    m--
    len--
  }

  while (n >= 0) {
    nums1[len] = nums2[n]
    n--
    len--
  }

  return nums1
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
