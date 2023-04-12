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
     
  }

  // 节点注册
  deep(node);


};