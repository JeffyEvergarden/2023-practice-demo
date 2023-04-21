var canCompleteCircuit = function (gas, cost) {


  let len = gas.length - 1;

  if (len < 0) {
    return -1
  }

  function deep(i) {

    let you = gas[i]; //当前油
    let pos = i; // 当前位置
    while (you > 0) {
      // 下个坐标
      let next = pos + 1 > len ? 0 : pos + 1;
      you = you - cost[pos]; // 达到下一个点剩余汽油

      // console.log('当前油量:' + (you + cost[pos]), '去到剩余容量:' + you, '下一个坐标:' + next);

      if (next === i && you >= 0) { // 到达目标位置
        // console.log('---')
        return true
      } else if (next === i) {
        return false
      }

      if (you < 0) { // 没油了
        return false
      }
      you = you + gas[next] // 能到达
      // 当前位置
      pos = next
    }
    return false
  };


  // deep(4)
  let last = null;

  for (let i = 0; i <= len; i++) {

    if (gas[i] === cost[i] && i !== 0) {
      last = gas[i];
      console.log('跳过')
      continue
    }

    let val = deep(i)
    if (val) {
      console.log(val);
       return i
    }
  }
  return -1
};

console.log(
  canCompleteCircuit([2, 1, 1, 1], [0, 1, 1, 1]) // 0
)

// console.log(
//   canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) // 3
// )

// console.log(
//   canCompleteCircuit([2, 3, 4], [3, 4, 3]) // -1
// )

// console.log(
//   canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]) // 4
// )