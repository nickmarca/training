const { Tree } = require("./bst-construction");

test('insert', () => {
  const tree = new Tree();

  'LROJZMPBFXKDUAVISEHNCYGWTQ'.split('').forEach(data => {
    tree.root = tree.insert(tree.root, data);
  });
  
  console.log(tree.breadthFirstSearch(tree.root));
});