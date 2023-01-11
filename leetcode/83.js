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

var deleteDuplicates = function (head) {
  let _head = head
  while (head && head.next) {
    if (head.next.val === head.val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }
  return _head
}
const list = genNodeList([1, 1, 1, 2, 3])

const _list = deleteDuplicates(list)

console.log(_list)

consoleList(_list)
