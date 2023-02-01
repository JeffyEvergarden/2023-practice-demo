var generate = function (numRows) {
  if (numRows < 1) {
    return [];
  }

  let arr = [
    [1]
  ];

  if (numRows === 1) {
    return arr;
  }

  for (let i = 2; i <= numRows; i++) {
    let lastArr = arr[i - 2];
    let curArr = [1];
    for (let j = 0; j < lastArr.length - 1; j++) {
      curArr.push(lastArr[j] + lastArr[j + 1])
    }
    curArr.push(1);
    arr.push(curArr);
  }

  return arr;
};


console.log(generate(5));