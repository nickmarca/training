function treeHeight(root) {
  return helper(root, 0);
}

function helper(root, height) {
  if (!root) {
    return height - 1;
  }
  
  return Math.max(
    helper(root.left, height + 1),
    helper(root.right, height + 1),
  );
}

// ===================================

const Tree = function() {
  this.root = null;
}

Tree.prototype.insert = function(node, data) {
  if (node == null){
    node = new Node(data);
  }
 else if (data < node.data){
      node.left  = this.insert(node.left, data);
  }
  else{
      node.right = this.insert(node.right, data);   
  }

  return node;
}

const Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

module.exports = {
  treeHeight,
  Tree,
  Node
};