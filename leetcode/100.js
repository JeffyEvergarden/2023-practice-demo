function isSame(p, q) {
  if (p === null && q === null) {
      return true
  } else if (p === null || q === null) {
      return false
  }

  return p.val === q.val && isSame(p.left, q.left) && isSame(p.right, q.right)
}

