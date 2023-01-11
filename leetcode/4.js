// 两个正序数组的中位数

var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let total = nums1.length + nums2.length
  let num = total % 2 === 1 ? 1 : 2
  let mid = parseInt(total / 2)
  mid = num === 1 ? mid + 1 : mid

  let val = 0

  let i = 0,
    j = 0,
    k = 0
  while (i < m && j < n) {
    k++
    if (nums1[i] < nums2[j]) {
      if (k === mid) {
        val = nums1[i]
      } else if (k === mid + 1 && num === 2) {
        val = (val + nums1[i]) / 2
        break
      }
      i++
    } else {
      if (k === mid) {
        val = nums2[j]
      } else if (k === mid + 1 && num === 2) {
        val = (val + nums2[j]) / 2
        break
      }
      j++
    }
  }

  // console.log(mid) // 1
  // console.log(val, k, mid)

  while (i < m && k < mid + 1) {
    k++
    if (k === mid && num === 1) {
      val = nums1[i]
    } else if (k === mid + 1 && num === 2) {
      val = (val + nums1[i]) / 2
    }
    i++
  }

  while (j < n && k < mid + 1) {
    k++
    if (k === mid && num === 1) {
      val = nums2[j]
    } else if (k === mid + 1 && num === 2) {
      val = (val + nums2[j]) / 2
    }
    j++
  }

  return val
}

console.log(findMedianSortedArrays([1, 3], [2]))
