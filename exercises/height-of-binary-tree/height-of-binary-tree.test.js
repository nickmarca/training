const input = require('./assets/input/input00.json');
const input04 = require('./assets/input/input04.json');
const input05 = require('./assets/input/input05.json');

const output = require('./assets/output/output00.json');
const output04 = require('./assets/output/output04.json');
const output05 = require('./assets/output/output05.json');

const { Tree, treeHeight } = require('./height-of-binary-tree');

const createTree = nodes => {
  let tree = new Tree();

  const [firstValue, restNodes] = nodes;
  
  nodes.forEach(value => {
    tree.root = tree.insert(tree.root, value);
  })

  return tree;
};

test('#1', () => {  
  const tree = createTree(input.nodes);

  expect(treeHeight(tree.root)).toBe(output.output);
});

test('#2', () => {  
  const tree = createTree(input04.nodes);

  expect(treeHeight(tree.root)).toBe(output04.output);
});

test('#3', () => {  
  const tree = createTree(input05.nodes);

  expect(treeHeight(tree.root)).toBe(output05.output);
});
