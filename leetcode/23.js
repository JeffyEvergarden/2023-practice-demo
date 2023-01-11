// 合并 k个有序链表

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var mergeKLists = function (lists) {
  let _start = new ListNode()
  let p = _start
  let k = lists.length
  while (lists.find((item) => !item)) {
    let target = null
    let i = -1
    lists.forEach((_p, index) => {
      if (_p && target == null) {
        i = index
        target = _p
      } else if (_p) {
        if (target.val > _p.val) {
          i = index
          target = _p
        }
      }
    })
    if (i > -1) {
      p.next = target
      lists[i] = lists[i].next
      p = p.next
      p.next = null
    }
    lists = lists.filter((item) => item)
  }
  return _start.next
}
