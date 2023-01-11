// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  }
  let len = nums.length
  let mid = Math.floor(len / 2)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid + 1)

  let node = new TreeNode(nums[mid])

  node.left = sortedArrayToBST(left)
  node.right = sortedArrayToBST(right)

  return node
}
