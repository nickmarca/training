const { BinaryTree } = require("./binary-tree");

test('BinaryTree #1', () => {
  const tree = BinaryTree.from([
    [2, 3],
    [-1, 4],
    [-1, 5],
    [-1, -1],
    [-1, -1]
  ]);

  expect(tree.left.data).toBe(2);
  expect(tree.right.data).toBe(3);
  
  expect(tree.left.right.data).toBe(4);
  expect(tree.right.right.data).toBe(5); 
});


test('BinaryTree #2', () => {
  const tree = BinaryTree.from([
    [2, 3],
    [4, -1],
    [5, -1],
    [6, -1],
    [7, 8],
    [-1, 9],
    [-1, -1],
    [10, 11],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ]);
  
  expect(tree.left.data).toBe(2);
  expect(tree.right.data).toBe(3);

  expect(tree.left.left.data).toBe(4);
  expect(tree.left.left.left.data).toBe(6);
  expect(tree.left.left.left.right.data).toBe(9);

  expect(tree.right.left.data).toBe(5);
  expect(tree.right.left.left.data).toBe(7);
  expect(tree.right.left.right.data).toBe(8);
  
  expect(tree.right.left.right.left.data).toBe(10);
  expect(tree.right.left.right.right.data).toBe(11);
});

test('BinaryTree - inOrderTraversal #1', () => {
  const tree = BinaryTree.from([
    [2, 3],
    [-1, 4],
    [-1, 5],
    [-1, -1],
    [-1, -1]
  ]);

  expect(BinaryTree.inOrderTraversal(tree)).toEqual([2, 4, 1, 3, 5]); 
});

test('BinaryTree - inOrderTraversal #2', () => {
  const tree = BinaryTree.from([
    [2, 3],
    [-1, 4],
    [-1, 5],
    [6, -1],
    [7, 8],
    [9, -1],
    [-1, -1],
    [11, 10],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ]);

  expect(tree.data).toBe(1);
  
  expect(tree.left.data).toBe(2);
  expect(tree.left.right.data).toBe(4);
  expect(tree.left.right.left.data).toBe(6);
  expect(tree.left.right.left.left.data).toBe(9);
  
  expect(tree.right.data).toBe(3);
  expect(tree.right.right.data).toBe(5);
  expect(tree.right.right.left.data).toBe(7);
  expect(tree.right.right.right.data).toBe(8);
  expect(tree.right.right.right.left.data).toBe(11);
  expect(tree.right.right.right.right.data).toBe(10);

  expect(BinaryTree.inOrderTraversal(tree)).toEqual([2, 9, 6, 4, 1, 3, 7, 5, 11, 8, 10]); 
});