/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let result = []
  // 前序遍历
  function dfs(node) {
    if (!node) {
      return
    }
    if (node.left) {
      dfs(node.left)
    }

    result.push(node.val)
    console.log(node.val)
    if (result.length > 1 && node.val <= result[result.length - 2]) {
      return
    }

    if (node.right) {
      dfs(node.right)
    }
  }

  dfs(root)
  if (result.length > 1 && node.val <= result[result.length - 2]) {
    return false
  }
  return true
}



