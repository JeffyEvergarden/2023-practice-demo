/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let flag = false

  if (!root) {
    return false
  }

  function fake(node, val) {
    // 没节点 返回
    if (!node) {
      return
    }
    val = val + node.val

    if (!node.left && !node.right) {
      if (val === targetSum) {
        flag = true
        return
      }
    }

    node.left && fake(node.left, val)
    node.right && fake(node.right, val)
  }

  fake(root, 0)

  return flag
}

const T = TreeNode

let t1 = new T(1)
let t2 = new T(2)

t1.left = t2

console.log(hasPathSum(t1, 1))
