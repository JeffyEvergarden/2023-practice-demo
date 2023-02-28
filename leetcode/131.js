// 分割回文串


var partition = function (s) {
  let sArr = s.split('');
  let length = sArr.length;

  let collect = [];

  collect[0] = [
    [sArr[0]]
  ]

  function isRevertStr(str) {
    let i = 0,
      j = str.length - 1;

    while (i < j) {
      if (str[i] === str[j]) {
        i++;
        j--;
      } else {
        break;
      }
    }
    return i > j
  }

  function dfs(i) {
    // 数组里面塞数组
    let curS = sArr[i]
    let result = collect[i - 1];

    let newResult = [];

    result.forEach(ele => {
      newResult.push([...ele, curS]);
      let curArr = [...ele];
      let len = curArr.length - 1;


      
    })
    collect[i] = newResult;
  };




  for (let i = 1; i < s.length; i++) {
    dfs(i);
    // console.log(collect[i])
  }

  console.log('---------')

  return collect[length - 1]
};

console.log(partition('efe'))