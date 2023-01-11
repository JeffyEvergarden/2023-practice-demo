function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const T = TreeNode

let t1 = new T(1)
let t2 = new T(2)
let t3 = new T(3)
let t4 = new T(4)
let t5 = new T(5)

t1.left = t2
t1.right = t3
t2.left = t4
t4.left = t5

var minDepth = function (root) {
  if (!root) {
    return 0
  }

  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
  } else if (root.left) {
    return 1 + minDepth(root.left)
  } else {
    return 1 + minDepth(root.right)
  }
}

console.log(minDepth(t1))
