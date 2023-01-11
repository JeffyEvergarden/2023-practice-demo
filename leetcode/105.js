// 105. 从前序与中序遍历序列构造二叉树
// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

// 前序 中序
// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]

// [9,20,15, 7]  [9] [15,20,7]

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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
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

var buildTree = function (preorder, inorder) {
  if (inorder.length === 0) {
    return null
  }

  if (preorder.length > 0) {
    let val = preorder.shift()
    let [left, right] = split(inorder, val)
    let node = new TreeNode(val)
    node.left = buildTree(preorder, left)
    node.right = buildTree(preorder, right)
    return node
  } else {
    return null
  }
}

let node = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
console.log(node.val)
console.log(preorderTraversal(node))
