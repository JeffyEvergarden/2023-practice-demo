// 前中后序遍历

// 前 --> 根左右
// 中 --> 左根右
// 后 --> 左右根

// 前
function midTravel(node) {
  let result = []

  function tavelNode(node) {
    if (!node) {
      return
    }
    node.left && tavelNode(node.left)
    result.push(node.val)
    node.right && tavelNode(node.right)
  }

  return result
}

//
function midTravel2(node) {
  let stack = [root]
  let stackType = [1]
  let result = []
  while (stack.length) {
    let node = stack.pop()
    let type = stackType.pop()
    if (!node) {
      // 不做啥
    } else if (type === 1) {
      // 状态 1 需要把 左节点塞进去
      stack.push(node, node.left)
      stackType.push(2, 1)
    } else if (type === 2) {
      // 状态 2 需要把 右节点塞进去
      result.push(node.val)
      stack.push(node.right)
      stackType.push(1)
    }
  }

  return result
}

function preTravel(node) {
  let result = []
  let stack = [node]
  let typeStack = [0]

  while (stack.length) {
    let n = stack.pop()
    let type = typeStack.pop()

    if (!node) {
    } else {
      result.push(val)
      stack.push(n.right, n.left)
    }
  }

  return result
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);

a.left = null
a.right = b;
b.left = c;

var postorderTraversal = function (root) {
  if (!root) {
    console.log('---')
    return []
  }
  let result = []
  let stack = [root]
  let typeStack = [0]

  while (stack.length) {
    let n = stack.pop()
    let type = typeStack.pop()

    if (!n) {
    } else if (type === 0) {
      stack.push(n, n.right, n.left)
      typeStack.push(1, 0, 0)
    } else if (type === 1) {
      result.push(n.val)
    }
    console.log(stack.length)
  }

  return result
}

console.log(
  postorderTraversal(a)
)