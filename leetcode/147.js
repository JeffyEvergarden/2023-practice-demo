function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const deep = (head) => {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}

const L = ListNode;

let l1 = new L(5);
let l2 = new L(4);
let l3 = new L(3);
let l4 = new L(2);
let l5 = new L(1);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {

  let _head = new ListNode(-Infinity, null);
  let _tail = _head;

  while (head) {
    let tail = head.next;

    if (_tail.val <= head.val) {
      _tail.next = head;
      head.next = null;
      _tail = head;
    } else {
      let n = _head; // 新的头节点
      while (n) {
        if (n.val < head.val && n.next && n.next.val < head.val) {
          n = n.next
        } else {
          break
        }
      }
      head.next = n.next;
      n.next = head;
    }
    head = tail;
  }

  return _head.next;
};



deep(insertionSortList(l1));