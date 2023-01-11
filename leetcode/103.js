var levelOrder = function (root) {
  let result = []
  if (!root) {
    return []
  }

  let arr = [root]
  let flag = true // 正序

  while (arr.length) {
    let _arr = []
    let __arr = []
    for (let i = 0; i < arr.length; i++) {
      let cur = arr[i]
      __arr.push(cur.val)
      if (flag) {
        cur.left && _arr.push(cur.left)
        cur.right && _arr.push(cur.right)
      } else {
        cur.right && _arr.push(cur.right)
        cur.left && _arr.push(cur.left)
      }
    }
    _arr = _arr.reverse()
    flag = !flag
    result.push(__arr)
    arr = _arr
  }
  return result
}
