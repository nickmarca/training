const fs = require('fs');
const path = require('path');
const { contacts, Tree } = require('./contacts');

const inputPath = path.join(__dirname, 'assets', 'input', 'input02.txt');
const outputPath = path.join(__dirname, 'assets', 'output', 'output02.txt');

// test('test', () => {
//   const _input = fs.readFileSync(inputPath, { encoding: 'utf-8' });
//   const __input = _input.split('\n');
//   __input.shift();
//   const input = __input.map(s => s.split(' '));

//   const _output = fs.readFileSync(outputPath, { encoding: 'utf-8'});
//   const output = _output.split('\n');

//   expect(contacts(input)).toEqual(output);
// });

test('Tree', () => {
  const tree = new Tree();

  tree.insert('A');
  tree.insert('B');
  tree.insert('C');
});