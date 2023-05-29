var searchInsert = function (nums, target) {
  let arr = nums
  let len = nums.length - 1
  let l = 0,
    r = len
  while (l <= r) {
    let mid = parseInt((l + r) / 2)
    console.log(l, r, mid)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return l
}
console.log(searchInsert([1, 3, 5, 6], 2))
