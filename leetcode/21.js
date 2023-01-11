function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var mergeTwoLists = function (list1, list2) {
  let start = new ListNode()
  let list = start
  while (list1 && list2) {
    if (list1.val < list2.val) {
      list.next = list1
      list1 = list1.next
    } else {
      list.next = list2
      list2 = list2.next
    }
    list = list.next
    if (list) {
      list.next = null
    }
  }
  if (list1) {
    list.next = list1
  }
  if (list2) {
    list.next = list2
  }
  return start.next
}

let l1 = [1, 3, 4].map((i) => new ListNode(i))
let l2 = [1, 2, 3].map((i) => new ListNode(i))

function genlist(arr) {
  arr.forEach((item, index) => {
    if (arr[index + 1]) {
      item.next = arr[index + 1]
    }
  })
  return arr[0]
}

l1 = genlist(l1)
l2 = genlist(l2)

let l3 = l1
let l4 = l2
while (l3) {
  console.log(l3.val)
  l3 = l3.next
}
while (l4) {
  console.log(l4.val)
  l4 = l4.next
}

let target = mergeTwoLists(l1, l2)
console.log('-------')
while (target) {
  console.log(target.val)
  target = target.next
}
