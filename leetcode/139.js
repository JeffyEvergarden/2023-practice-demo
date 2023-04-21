// leetcode 139. 单词拆分 , 优化下我的代码， 他实现超时了
var wordBreak = function (s, wordDict) {

  let flagArr = new Array(s.length).fill(false);
  // 排个序
  wordDict = wordDict.sort((a, b) => {
    return a.length < b.length ? 1 : -1
  })

  let max = wordDict[0].length;
  console.log(wordDict, max);


  function deep(index) {
    if (index >= s.length) {
      return;
    }
    let curStr = s.substr(index, max);
    // console.log(curStr)
    // ------
    let _arr = wordDict.filter(item => {
      return curStr.indexOf(item) === 0 && item.length > 0;
    })

    // console.log('当前处理的字符串， 和查找的数组')
    // console.log(s, _arr);
    // console.log('----');
    // 数组为0 继续不下去
    if (_arr.length === 0) {
      // console.log('-中断')
      return false
    }

    // 如果有代表有可能方案
    for (let i = 0; i < _arr.length; i++) {
      let _str = _arr[i]; // 
      let len = _str.length;
      if (flagArr[index + len - 1]) { // 已经走过
        return false
      } else {
        flagArr[index + len - 1] = true
      }
      let nextIndex = index + len
      // console.log('下一个字符窜', nextStr);
      deep(nextIndex)
    }


  };
  deep(0)

  return flagArr[s.length - 1];
}
console.log(
  wordBreak("leetcode", ["leet", "code"])
)

console.log(
  wordBreak(
    "catsandog",
    ["cats", "dog", "sand", "and", "cat"]
  )
)

console.log(
  wordBreak("abcd", ["a", "abc", "b", "cd"])
)