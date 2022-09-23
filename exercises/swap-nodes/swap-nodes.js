const { BinaryTree } = require("../../lib/binary-tree/binary-tree");

function swapNodes(indexes, queries) {
  const tree = BinaryTree.from(indexes);
  const res = [];

  for (let k of queries) {
    BinaryTree.swap(tree, k);
    res.push(BinaryTree.inOrderTraversal(tree));
  }

  return res;
}

module.exports = {
  swapNodes,
};