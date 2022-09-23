const { runningMedian } = require("./find-the-running-median");

test('find the running median #1', () => {
  expect(
    runningMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    ).toEqual(
      [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5].map(x => x.toFixed(1))
    );  
});