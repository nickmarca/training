const { MinHeap } = require("./min-heap");


test('MinHeap #1', () => {
  const minHeap = new MinHeap([1, 2, 3, 4, 5]);

  expect(minHeap.peek()).toBe(1);
});

test('MinHeap #2', () => {
  const minHeap = new MinHeap([5, 2, 9, 10, 34, -1, 20, 3]);

  expect(minHeap.peek()).toBe(-1);

  minHeap.insert(4);

  expect(minHeap.peek()).toBe(-1);

  minHeap.insert(-5);

  expect(minHeap.peek()).toBe(-5);
});

test('MinHeap.remove', () => {
  const minHeap = new MinHeap([5, 2, 9, 10, 34, -1, 20, 3]);

  expect(minHeap.peek()).toBe(-1);

  minHeap.remove();

  expect(minHeap.peek()).toBe(2);

  minHeap.remove();

  expect(minHeap.peek()).toBe(3);
});