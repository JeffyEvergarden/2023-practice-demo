function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 中序遍历 --> 左节点 ---> 中节点 -----> 右节点

// 递归方式
var inorderTraversal = function (root) {
  let result = []

  function deep(node) {
    if (!node) {
      return
    }
    if (node.left) {
      deep(node.left)
    }
    result.push(node.val)

    if (node.right) {
      deep(node.right)
    }
  }

  deep(root)

  return result
}

// 堆栈方式

var inorderTraversal2 = function (root) {
  let stack = [root]
  let stackType = [1]
  let result = []
  while (stack.length) {
    let node = stack.pop()
    let type = stackType.pop()
    if (!node) {
      // 不做啥
    } else if (type === 1) {  // 状态 1 需要把 左节点塞进去
      stack.push(node, node.left)
      stackType.push(2, 1)
    } else if (type === 2) { // 状态 2 需要把 右节点塞进去
      result.push(node.val)
      stack.push(node.right)
      stackType.push(1)
    }
  }

  return result
}
