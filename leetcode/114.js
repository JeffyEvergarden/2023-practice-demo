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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let result = []

  function dfs(node) {
    if (!node) {
      return
    }
    result.push(node)
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
  }

  dfs(root)
  let next = null
  while (result.length) {
    let cur = result.pop()
    cur.left = null
    cur.right = next
    next = cur
  }
  return next
}
