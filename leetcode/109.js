/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function (head) {
  let nums = []
  while (head) {
    nums.push(head.val)
    head = head.next
  }
  return sortedArrayToBST(nums)
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null
  }
  let len = nums.length
  let mid = Math.floor(len / 2)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid + 1)

  let node = new TreeNode(nums[mid])

  node.left = sortedArrayToBST(left)
  node.right = sortedArrayToBST(right)

  return node
}


