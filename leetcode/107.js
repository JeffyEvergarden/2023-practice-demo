function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let result = []
  if (!root) {
    return result
  }
  let curArr = [root]
  while (curArr.length) {
    let nextArr = []
    let _curArr = []
    curArr = curArr.map((item) => {
      _curArr.push(item.val)
      item.left && nextArr.push(item.left)
      item.right && nextArr.push(item.right)
    })
    result.unshift(_curArr)
    curArr = nextArr
  }
  return result
}
