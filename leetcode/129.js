var sumNumbers = function (root) {
  let sum = 0;

  function dfs(node, val) {
    if (!node) {
      return;
    }
    val = val * 10 + node.val
    if (!node.left && !node.right) {
      sum = sum + val;
    } else {
      dfs(node.left, val);
      dfs(node.right, val);
    }
  }
  dfs(root, 0);
  return sum;
};