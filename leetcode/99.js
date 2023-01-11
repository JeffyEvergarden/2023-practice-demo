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
var recoverTree = function (root) {
  let perv = null
  let err1,
    err2 = null

  const inOrder = (node) => {
    if (node == null) {
      return
    }
    inOrder(node.left)

    if (perv && perv.val >= node.val && err1 == null) {
      // 当前是第一对错误
      err1 = perv // 记录第一个错误点
    }
    if (perv && perv.val >= node.val && err1 != null) {
      // 第一个错误点已确定
      err2 = node // 记录第二个错误点
    }
    perv = node // 更新 perv

    inOrder(node.right)
  }

  inOrder(root)
  const temp = err1.val
  err1.val = err2.val
  err2.val = temp

  return root
}
