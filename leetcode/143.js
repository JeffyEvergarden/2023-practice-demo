var reorderList = function (head) {
  if (!head || (head && !head.next)) {
    return head
  }
  let _head = head,
    __head = head;
  let arr = [];
  while (head && head.next) {
    arr.push(head.next);
    head = head.next;
  }
  let i = 0;
  let j = arr.length - 1;
  let type = 'j'
  while (i <= j) {
    if (type === 'j') {
      _head.next = arr[j];
      _head = _head.next;
      j--;
      type = 'i'
    } else if (type === 'i') {
      _head.next = arr[i];
      _head = _head.next;
      i++;
      type = 'j'
    }
  }
  _head.next = null;
  return __head;
};