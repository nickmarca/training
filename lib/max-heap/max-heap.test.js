const { MaxHeap } = require("./max-heap")

test('MaxHeap #1', () => {
  const maxHeap = new MaxHeap([1, 2, 3, 4, 5]);

  expect(maxHeap.peek()).toBe(5);
});

test('MaxHeap #2', () => {
  const maxHeap = new MaxHeap([5, 2, 9, 10, 34, -1, 20, 3]);

  expect(maxHeap.peek()).toBe(34);

  maxHeap.insert(4);

  expect(maxHeap.peek()).toBe(34);

  maxHeap.insert(40);

  expect(maxHeap.peek()).toBe(40);
});

test('MaxHeap.remove', () => {
  const maxHeap = new MaxHeap([5, 2, 9, 10, 34, -1, 20, 3]);

  expect(maxHeap.peek()).toBe(34);

  maxHeap.remove();

  expect(maxHeap.peek()).toBe(20);
  
  maxHeap.remove();

  expect(maxHeap.peek()).toBe(10);
});