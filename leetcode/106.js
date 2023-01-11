// 106. 从中序与后序遍历序列构造二叉树

// // 中序遍历 --> 左节点 ---> 中节点 -----> 右节点

// 后序遍历 ---> 左节点 ---> 右节点 -----> 中节点

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var preorderTraversal = function (root) {
  let result = []

  function deep(node) {
    if (!node) {
      return
    }
    result.push(node.val)

    if (node.left) {
      deep(node.left)
    }

    if (node.right) {
      deep(node.right)
    }
  }

  deep(root)

  return result
}

function split(arr, i) {
  let index = arr.findIndex((key) => {
    return key === i
  })
  if (index < 0) {
    return [arr, []]
  }
  let left = arr.slice(0, index)
  let right = arr.slice(index + 1)

  return [left, right]
}

var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) {
    return null
  }

  if (postorder.length > 0) {
    let val = postorder.pop()
    let [left, right] = split(inorder, val)
    let node = new TreeNode(val)
    node.right = buildTree(right, postorder)
    node.left = buildTree(left, postorder)
    return node
  } else {
    return null
  }
}

let node = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])

// [3,9,20,15,7]
console.log(preorderTraversal(node))
