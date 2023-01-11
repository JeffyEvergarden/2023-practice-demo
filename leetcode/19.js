// 删除链表倒数第n个节点

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

//  start-> 1 ,2 ,3

var removeNthFromEnd = function (head, n) {
  let len = 0
  let p = head
  let _start = new ListNode(0, p)
  while (p) {
    p = p.next
    len++
  }
  if (len < n) {
    return head
  }
  let num = len - n
  p = _start

  while (num) {
    p = p.next
    num--
  }
  if (p.next) {
    p.next = p.next.next
  }
  return _start.next
}
