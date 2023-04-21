/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};
/**
 * @param {Node} node
 * @return {Node}
 */


var cloneGraph = function (node) {

  if (!node) {
    return null;
  }

  const nodeMap = {};
  const map = {};

  function deep(n) {
    if (nodeMap[n.val]) {
      return
    }
    let nN = new Node(n.val, []);
    nodeMap[n.val] = nN;
    const child = n.neighbors || [];
    child.map((item) => {
      deep(item)
    });
  }

  function clone(node) {
    let val = node.val;
    const child = node.neighbors;
    let n = nodeMap[val];
    if (n.neighbors.length > 0) {
      return
    } else {
      n.neighbors = child.map((item) => {
        return nodeMap[item.val];
      })
    }

    child.forEach(ele => {
      clone(ele);
    });
  }

  // 节点注册
  // 注册
  deep(node);
  // 广度遍历克隆
  clone(node);

  return nodeMap[node.val];

};


var cloneGraph2 = function (node) {

  if (!node) {
    return null;
  }

  const nodeMap = {};
  const map = {};

  function deep(n) {
    let nN = null
    if (nodeMap[n.val]) {
      nN = nodeMap[n.val]
    } else {
      nN = new Node(n.val, []);
      nodeMap[n.val] = nN;
    }
    if (nN.neighbors && nN.neighbors.length === 0) { // 没处理
      const child = n.neighbors;
      nN.neighbors = child.map((item) => {
        const _val = item.val;
        if (!nodeMap[_val]) {
          nodeMap[_val] = new Node(_val, []);
        }
        return nodeMap[item.val];
      })
      child.forEach((item) => {
        deep(item);
      })
    } else {
      return
    }
  }


  // 节点注册
  // 遍历
  deep(node);
  return nodeMap[node.val];

};