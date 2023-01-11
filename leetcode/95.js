//  给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

Array.prototype.split = function (n) {
  let arr1 = this.filter((item) => item < n)
  let arr2 = this.filter((item) => item > n)
  return [arr1, arr2]
}

var generateTrees2 = function (n) {
  let numArr = new Array(n).fill(null).map((k, i) => {
    return i + 1
  })

  function collect(k, waitArr) {
    let result = []
    if (waitArr.length === 0) {
      return []
    }
    let _waitArr = waitArr.split(k)
    //
    let leftWaitArr = _waitArr[0]
    let rightWaitArr = _waitArr[1] || []

    //左边的可能性
    let leftTreeList = []

    for (let i = 0; i < leftWaitArr.length; i++) {
      leftTreeList.push(...collect(leftWaitArr[i], leftWaitArr))
    }

    leftWaitArr.length === 0 && leftTreeList.push(null)

    // 右边数的可能
    let rightTreeList = []
    for (let i = 0; i < rightWaitArr.length; i++) {
      rightTreeList.push(...collect(rightWaitArr[i], rightWaitArr))
    }
    rightWaitArr.length === 0 && rightTreeList.push(null)

    for (let i = 0; i < leftTreeList.length; i++) {
      for (let j = 0; j < rightTreeList.length; j++) {
        let nn = new TreeNode(k)
        nn.left = leftTreeList[i]
        nn.right = rightTreeList[j]
        result.push(nn)
      }
    }
    return result
  }

  let treeList = []
  for (let i = 1; i <= n; i++) {
    treeList.push(...collect(i, numArr))
  }

  return treeList
}

var generateTrees = function (n) {
  function dfs(l, r) {
    if (l > r) {
      return [null]
    }
    let ans = []
    for (let i = l; i <= r; i++) {
      let arrLeft = dfs(l, i - 1)
      let arrRight = dfs(i + 1, r)

      for (let left of arrLeft) {
        for (let right of arrRight) {
          ans.push(new TreeNode(i, left, right))
        }
      }
    }
    return ans
  }
  return dfs(1, n)
}

console.log(generateTrees(3))
