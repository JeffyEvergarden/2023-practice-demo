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
  let _head = new ListNode()
  _head.next = head
  let tail = _head
  while (tail) {
    let p = tail.next
    let k = false

    while (p && p.next && p.next.val === p.val) {
      k = true
      p.next = p.next.next
    }

    if (k === true) {
      // 代表有重复值
      tail.next = p.next
    } else {
      tail = tail.next
    }
  }
  return _head.next
}

const list = genNodeList([1, 1, 1, 2, 3])

const _list = deleteDuplicates(list)

console.log(_list)

consoleList(_list)
