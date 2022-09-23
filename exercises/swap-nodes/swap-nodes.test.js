const { swapNodes } = require("./swap-nodes");

test('swapNodes #1', () => {
  expect(swapNodes([
    [2, 3],
    [-1, -1],
    [-1, -1],
  ], [1, 1])).toEqual([
    [3, 1, 2],
    [2, 1, 3],
  ]);
});

test('swapNodes #2', () => {
  const indexes = [
    [2, 3],
    [4, 5],
    [6, -1],
    [-1, 7],
    [8, 9],
    [10, 11],
    [12, 13],
    [-1, 14],
    [-1, -1],
    [15, -1],
    [16, 17],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ];

  const queries = [2, 3];

  const res = swapNodes(indexes, queries);
  
  const output = [
    [14, 8, 5, 9, 2, 4, 13, 7, 12, 1, 3, 10, 15, 6, 17, 11, 16],
    [9, 5, 14, 8, 2, 13, 7, 12, 4, 1, 3, 17, 11, 16, 6, 10, 15]
  ];

  expect(res).toEqual(output);
})