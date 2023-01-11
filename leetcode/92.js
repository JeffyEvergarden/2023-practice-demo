// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/reverse-linked-list-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function genNodeList(arr) {
  let list = arr.map((val) => {
    return new ListNode(val)
  })
  list.forEach((item, index) => {
    if (index < list.length - 1) {
      item.next = list[index + 1]
    } else {
      item.next = null
    }
  })
  return list[0]
}

function consoleList(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  console.log(arr)
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let newStart = new ListNode()
  newStart.next = head
  let _nw = newStart
  let i = 0
  let _tail = null

  let _reverseList = null

  let record = null

  while (i < left && _nw) {
    if (i === left - 1) {
      record = _nw
    }
    _nw = _nw.next
    i++
  }

  // 找不到 left位置
  if (i < left) {
    return head
  }
  // 记录尾节点
  tail = _nw

  console.log(tail.val)

  //
  _reverseList = null

  while (i <= right && _nw) {
    let tmp = _nw.next
    _nw.next = _reverseList
    _reverseList = _nw
    _nw = tmp
    i++
  }

  console.log(_reverseList.val)

  tail.next = _nw
  record.next = _reverseList

  return newStart.next
}

let list = genNodeList([1, 2, 3, 4, 5])
consoleList(list)
let list1 = reverseBetween(list, 2, 4)
//[1,4,3,2,5]
consoleList(list1)
