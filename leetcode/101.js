function isSame(p, q) {
  if (p === null && q === null) {
    return true
  } else if (p === null || q === null) {
    return false
  }

  return p.val === q.val && isSame(p.left, q.right) && isSame(p.right, q.left)
}

var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  let _left = root.left
  let _right = root.right

  return isSame(_left, _right)
}
