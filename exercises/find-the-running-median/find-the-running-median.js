const { MaxHeap } = require("../../lib/max-heap/max-heap");
const { MinHeap } = require("../../lib/min-heap/min-heap");

function runningMedian(array) {
  const minHeap = new MinHeap([]);
  const maxHeap = new MaxHeap([]);
  const res = [];

  for (let i = 0; i < array.length; i++) {
    minHeap.insert(array[i]);
    maxHeap.insert(minHeap.remove());    

    if (maxHeap.heap.length > minHeap.heap.length + 1) {
      minHeap.insert(maxHeap.remove());
    }

    if (((maxHeap.heap.length + minHeap.heap.length) % 2) === 0) {
      res.push(((maxHeap.peek() + minHeap.peek()) / 2).toFixed(1));
    } else {
      res.push(maxHeap.peek().toFixed(1));
    }
  }

  return res;
}

module.exports = {
  runningMedian,
};