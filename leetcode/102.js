//

var levelOrder = function (root) {
  let result = []
  if (!root) {
    return []
  }

  let arr = [root]

  while (arr.length) {
    let _arr = []
    let __arr = []
    for (let i = 0; i < arr.length; i++) {
      let cur = arr[i]
      __arr.push(cur.val)
      cur.left && _arr.push(cur.left)
      cur.right && _arr.push(cur.right)
    }
    result.push(__arr)
    arr = _arr
  }
  return result
}
