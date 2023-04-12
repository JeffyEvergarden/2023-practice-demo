// 分割回文串


var partition = function (s) {
  //字符串
  let sArr = s.split('');
  // 字符串长度
  let length = sArr.length;

  let collect = [];

  collect[0] = [
    [sArr[0]]
  ]

  // 判断是否是回温窜
  function isRevertStr(str) {
    let i = 0,
      j = str.length - 1;

    while (i <= j) {
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
    // 当前字符数组
    let curS = sArr[i]
    let result = collect[i - 1];

    let newResult = [];

    let k = i;
    let str = '';

    while (k >= 0) {
      str = sArr[k] + str;
      let result = k > 0 ? collect[k - 1] : [];
      // console.log(str, isRevertStr(str));
      if (isRevertStr(str)) { // 是回文窜
        if (result.length > 0) {
          result.forEach(ele => {
            newResult.push([...ele, str]);
          })
        } else {
          newResult.push([str]);
        }
      }
      k--;
    }

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