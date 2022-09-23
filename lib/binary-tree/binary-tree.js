class BinaryTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  static from(array) {
    const root = new BinaryTree(1);
    let fifo = [root];

    for (let entry of array) {
      const currentNode = fifo.shift();
      const [firstIndex, secondIndex] = entry;
      
      if (firstIndex !== -1) {
        currentNode.left = new BinaryTree(firstIndex);
        fifo.push(currentNode.left); 
      }

      if (secondIndex !== -1) {
        currentNode.right = new BinaryTree(secondIndex);
        fifo.push(currentNode.right);
      }
    }

    return root;
  }

  static inOrderTraversal(tree, res = []) {     
    if (!tree) {
      return res;
    }
 
    BinaryTree.inOrderTraversal(tree.left, res);
    res.push(tree.data);
    BinaryTree.inOrderTraversal(tree.right, res);

    return res;
  }

  static swap(tree, k, depth = 1) {
    if (!tree) {
      return;
    }

    if (depth % k === 0) {
      const tmp = tree.left;
      tree.left = tree.right;
      tree.right = tmp;
    }
    
    BinaryTree.swap(tree.left, k, depth + 1);
    BinaryTree.swap(tree.right, k, depth + 1);
  }  
}

module.exports = {
  BinaryTree,
};