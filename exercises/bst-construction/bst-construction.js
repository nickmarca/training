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

Tree.prototype.breadthFirstSearch = function (root) {
  let fifo = [root];
  let log = '';

  while (fifo.length) {
    let current = fifo.shift();
 
    log += current.data;

    if (current.left) {
      fifo.push(current.left);
    }
    
    if (current.right) {
      fifo.push(current.right);
    }
  }
  return log;
}

const Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

module.exports = {
  Tree,
  Node,
};