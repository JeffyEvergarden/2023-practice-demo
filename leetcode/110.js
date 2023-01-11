function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const T = TreeNode

var isBalanced = function (root) {
  return height(root) > -1
}

function height(node) {
  if (!node) {
    return 0
  }

  let val1 = height(node.left)

  if (val1 === -1) {
    return -1
  }

  let val2 = height(node.right)
  // 如果左右有不合格的 则直接为不合格
  if (val2 === -1) {
    return -1
  }

  // 左右差值大于1 则不合格
  if (Math.abs(val1 - val2) > 1) {
    return -1
  }

  return 1 + Math.max(val1, val2)
}

let t1 = new T(1)
let t2 = new T(2)
let t3 = new T(3)
let t4 = new T(4)
let t5 = new T(5)

t1.left = t2
t1.right = t3
t2.left = t4
t4.left = t5

console.log(height(t1))
