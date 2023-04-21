class Node {

}

//----
var evalRPN2 = function (tokens) {

  const isOp = (val) => {
    return ['+', '-', '*', '/'].includes(val);
  }

  const isNum = (val) => {
    return !isNaN(val)
  }

  const deep = (node) => {
    if (typeof node === 'number') {
      return
    }

    if (typeof node.a !== 'number') {
      deep(node.a);
    }
    if (typeof node.b !== 'number') {
      deep(node.b);
    }
    let a = typeof node.a === 'number' ? node.a : node.a.value;
    let b = typeof node.b === 'number' ? node.b : node.b.value;

    let compare = node.compare;
    if (compare === '+') {
      node.value = a + b
    } else if (compare === '-') {
      node.value = a - b;
    } else if (compare === '*') {
      node.value = a * b;
    } else if (compare === '/') {
      node.value = parseInt(a / b);
    }
  }

  let cur = null;
  let list = ['op'];
  let nodeList = []
  let _list = [];

  // let type = 'op' // --> b  --->a
  let i = 1;
  while (tokens.length > 0) {
    // console.log([...tokens], [...list]);

    let _curStr = tokens.pop();
    let curStatus = list.pop();

    // console.log(`${i} :`, _curStr, '   ', curStatus)

    if (isOp(_curStr)) {
      let n = new Node();
      _list.push(n);
      n.compare = _curStr;
      n.type = 'op';
      if (curStatus === 'a') {
        // console.log('op且a')
        nodeList.push(cur); // 节点推进
        cur.a = n;
      } else if (curStatus === 'b') {
        nodeList.push(cur); // 节点推进
        cur.b = n;
      }
      list.push('a', 'b');
      cur = n; // 当前节点设为 n

    } else if (isNum(_curStr) && curStatus === 'b') {
      cur.b = Number(_curStr);
    } else if (isNum(_curStr) && curStatus === 'a') {
      cur.a = Number(_curStr);
      //  console.log(_curStr, cur.compare);
      cur = nodeList.pop();
      // console.log(cur && cur.compare)
    } else {
      console.log(`${_curStr}-----${curStatus}`)
    }

  }

  console.log(JSON.stringify(_list[0]))

  // deep(_list[0]);

  // console.log(_list[0].value);


  return _list[0].value;

};


var evalRPN = function (tokens) {
  if (tokens.length === 0) {
    return 0
  }

  const isOp = (val) => {
    return ['+', '-', '*', '/'].includes(val);
  }

  const isNum = (val) => {
    return !isNaN(val)
  }

  var stack = [];

  while (tokens.length > 0) {
    // console.log([...stack])
    let val = tokens.shift();
    if (isNum(val)) {
      stack.push(Number(val));
    } else if (isOp(val)) {
      let a = stack.pop();
      let b = stack.pop();
      let c = 0;
      if (val === '+') {
        c = a + b
      } else if (val === '-') {
        c = b - a;
      } else if (val === '*') {
        c = a * b;
      } else if (val === '/') {
        c = parseInt(b / a);
      }
      stack.push(c);
    }
  }
  // console.log(stack[0])
  return stack[0];
}


evalRPN(["2", "3", "*"])

evalRPN(["2", "1", "+", "3", "*"]) // (2 + 1) * 3


evalRPN(["4", "13", "5", "/", "+"]) //  4 +(13 / 5)


evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])