function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
// n2.right = n5;
// n3.left = n6;
n3.right = n7;


var connect = function (root) {
  if (!root) {
    return null;
  }
  if (root.left && root.right) {
    root.left.next = root.right;
  }
  let rt = root.next
  while (rt && !rt.left && !rt.right) {
    rt = rt.next
  }
  if (root.right) {
    if (rt && rt.left) {
      root.right.next = rt.left
    } else if (rt && rt.right) {
      root.right.next = rt.right
    }
  } else if (root.left) {
    if (rt && rt.left) {
      root.left.next = rt.left
    } else if (rt && rt.right) {
      root.left.next = rt.right
    }
  }
  connect(root.right);
  connect(root.left);
  return root;
}


connect(n1);


var vertify = function (root) {
  if (!root) {
    return null;
  }
  let arr = [root];
  let stack = [];
  let curArr = [];
  while (arr.length > 0) {
    stack.push([...arr])
    while (arr.length > 0) {
      let node = arr.shift();
      if (node.left) {
        curArr.push(node.left);
      }
      if (node.right) {
        curArr.push(node.right);
      }
    }
    arr = curArr;
    curArr = [];
    let _n = arr[0];
    logArr = [];
    while (_n) {
      logArr.push(_n.val);
      _n = _n.next;
    }
    console.log(logArr);
  }

  return root;
};

vertify(n1);