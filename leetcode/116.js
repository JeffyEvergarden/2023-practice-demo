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
 n2.right = n5;
 n3.left = n6;
 n3.right = n7;



 var connect = function (root) {
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
   }

   for (let i = 0; i < stack.length; i++) {
     let curArr = stack[i];
     let valArr = []
     for (let j = 0; j < curArr.length; j++) {
       valArr.push(curArr[j].val)
     }
     console.log(valArr);
   }

   for (let i = 0; i < stack.length; i++) {
     let curArr = stack[i];
     for (let j = 0; j < curArr.length - 1; j++) {
       curArr[j].next = curArr[j + 1]
     }

   }
   return root;
 };

 connect(n1);


 var connect2 = function (root) {
   if (!root) {
     return null;
   }
   if (root.left && root.right) {
     root.left.next = root.right;
   }

   if (root.right) {
     if (root.next && root.next.left) {
       root.right.next = root.next.left
     } else if (root.next && root.next.right) {
       root.right.next = root.next.right
     }
   } else if (root.left) {
     if (root.next && root.next.left) {
       root.left.next = root.next.left
     } else if (root.next && root.next.right) {
       root.left.next = root.next.right
     }
   }
   connect2(root.right);
   connect2(root.left);

   return root;
 }