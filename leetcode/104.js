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
 * @return {number}
 */
var maxDepth = function (root) {
  let num = 0

  function dfs(node, i) {
    if (!node) {
      return
    }
    if (i >= num) {
      num = i + 1
    }
    node.left && dfs(node.left, i + 1)
    node.right && dfs(node.right, i + 1)
  }

  dfs(root, 0)

  return num
}
