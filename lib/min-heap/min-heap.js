class MinHeap {
  constructor(array) {
      this.heap = this.buildHeap(array);
  }
  buildHeap(array) {
      let firstParentIndex = Math.floor((array.length - 2) / 2);
      for (let currentIndex = firstParentIndex; currentIndex >= 0; currentIndex--) {
          this.siftDown(currentIndex, array.length - 1, array);
      }
      return array;
  }
  siftDown(currentIndex, endIndex, heap) {
      let childOneIndex = currentIndex * 2 + 1;
      while (childOneIndex <= endIndex) {
          let childTwoIndex = (currentIndex * 2 + 2) <= endIndex ?
              currentIndex * 2 + 2 :
              -1;
          let indexToSwap = -1;
          if (childOneIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]) {
              indexToSwap = childTwoIndex;
          }
          else {
              indexToSwap = childOneIndex;
          }
          if (heap[indexToSwap] < heap[currentIndex]) {
              this.swap(currentIndex, indexToSwap, heap);
              currentIndex = indexToSwap;
              childOneIndex = currentIndex * 2 + 1;
          }
          else {
              break;
          }
      }
  }
  siftUp(currentIndex, heap) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      while (currentIndex > 0 && heap[currentIndex] < heap[parentIndex]) {
          this.swap(currentIndex, parentIndex, heap);
          currentIndex = parentIndex;
          parentIndex = Math.floor((currentIndex - 1) / 2);
      }
  }
  peek() {
      return this.heap[0];
  }
  remove(heap = this.heap) {
      this.swap(0, heap.length - 1, heap);
      const removedValue = heap.pop();
      this.siftDown(0, heap.length - 1, heap);
      return removedValue;
  }
  insert(value, heap = this.heap) {
      heap.push(value);
      this.siftUp(heap.length - 1, heap);
  }
  swap(i, j, heap) {
      const tmp = heap[i];
      heap[i] = heap[j];
      heap[j] = tmp;
  }
}

module.exports = {
  MinHeap,
};