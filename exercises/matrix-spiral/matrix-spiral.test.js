const { matrixSpiral } = require("./matrix-spiral");

test('1', () => {
  expect(matrixSpiral(1)).toEqual([[1]]);
});

test('2', () => {
  expect(matrixSpiral(2)).toEqual([[1, 2], [4, 3]]);
});

test('3', () => {
  expect(matrixSpiral(3)).toEqual(
    [
      [1, 2, 3], 
      [8, 9, 4],
      [7, 6, 5],
    ]
  );
});