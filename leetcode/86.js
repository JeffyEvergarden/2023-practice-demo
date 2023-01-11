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

var partition = function (head, x) {
  let _head = new ListNode()
  let __head = _head
  let _tail = new ListNode()
  let __tail = _tail

  while (head) {
    if (head.val < x) {
      _head.next = head
      head = head.next
      _head = _head.next
      _head.next = null
    } else {
      _tail.next = head
      head = head.next
      _tail = _tail.next
      _tail.next = null
    }
  }
  // consoleList(__head)
  // consoleList(__tail)
  _head.next = __tail.next

  return __head.next
}

let list = genNodeList([1, 4, 3, 2, 5, 2])

let _list = partition(list, 3)

consoleList(_list)
