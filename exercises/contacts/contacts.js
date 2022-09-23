export const Tree = function () {
  this.root = null;
};

Tree.prototype.insert = function (node, data) {  
  node = node || new Node(data);
  let currentNode = node;
  
  while (true) {
    if(value < currentNode.data) {
      if (!currentNode.left) {
        currentNode.left = new Node(value);
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new Node(value);
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
  
  return node;
}

Tree.prototype.findAll = function (node, str, res = []) {
  if (!node) {
    return res;
  } else if (node.data.startsWith(str)) {
    res.push(node.data);
    return this.findAll(node.right, str, res);
  } else if (node.data > str) {
    return this.findAll(node.left, str, res);
  } else {
    return this.findAll(node.right, str, res);
  }
} 

const Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

function contacts(queries) { 
  const storage = new Tree();

  function add(contact) {
    storage.root = storage.insert(storage.root, contact);
  }

  function find(str) {
    return storage.findAll(storage.root, str);
  }

  const operations = {
    add,
    find, 
  };
    
  let result = [];
    
  for (let i = 0; i < queries; i++) {
    const [operation, param] = queries[i];
    
    if (!Object.keys(operations).includes(operation)) {
      throw Error('Unknown operation');
    }
    
    const res = operations[operation](param);
    
    if (res) {
      result.concat(res)
    }
  }
  
  return result;
}