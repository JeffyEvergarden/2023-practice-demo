/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head
  }
  let tail = head
  let len = 1
  while (tail.next) {
    tail = tail.next
    len++
  }
  // len 个循环为一轮
  k = k % len

  // 头尾相接
  tail.next = head

  // 移动 1步
  // 等于 头节点移动 len-1步
  k = len - k

  while (k--) {
    tail = tail.next
  }

  head = tail.next
  tail.next = null
  return head
}
