/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let startNode = new ListNode()
  let p = startNode
  let upPo = 0
  while (l1 && l2) {
    let val = l1.val + l2.val + upPo
    upPo = parseInt(val / 10)
    p.next = new ListNode(val % 10, null)
    p = p.next
    l1 = l1.next
    l2 = l2.next
  }

  while (l1) {
    let val = l1.val + upPo   // 考虑进位
    upPo = parseInt(val / 10)
    p.next = new ListNode(val % 10, null)
    p = p.next
    l1 = l1.next
  }

  while (l2) {
    let val = l2.val + upPo
    upPo = parseInt(val / 10)
    p.next = new ListNode(val % 10, null)
    p = p.next
    l2 = l2.next
  }
  if (upPo) {
    p.next = new ListNode(upPo, null)
  }

  return startNode.next
}

// 大数字通不过  ------------------------------------
var addTwoNumbers2 = function (l1, l2) {
  let val = getVal(l1) + getVal(l2)
  return toList(val)
}

function getVal(list) {
  let val = 0
  let i = 1
  while (list) {
    val = val + list.val * i
    list = list.next
    i = 10 * i
  }
  return val
}

function toList(val) {
  let startNode = new ListNode()
  let p = startNode
  while (val) {
    let _val = val % 10
    val = parseInt(val / 10)
    let n = new ListNode(_val, null)
    p.next = n
    p = p.next
  }
  return startNode.next
}
