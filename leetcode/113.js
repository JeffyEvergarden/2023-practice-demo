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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let result = []

  if (!root) {
    return []
  }

  function deepSearch(node, val, arr) {
    if (!node) {
      return
    }

    val += node.val
    arr.push(node.val)
    if (!node.left && !node.right) {
      if (val === targetSum) {
        result.push([...arr])
      }
    }

    node.left && deepSearch(node.left, val, arr)
    node.right && deepSearch(node.right, val, arr)
    arr.pop()
  }

  deepSearch(root, 0, [])

  return result
}
