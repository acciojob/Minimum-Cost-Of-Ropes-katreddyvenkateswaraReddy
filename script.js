// Define a priority queue (min-heap) using a binary heap
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Function to push a new element into the heap
  push(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  // Function to remove and return the minimum element from the heap
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  // Function to check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Helper function to maintain the heap property (upwards)
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) {
        break;
      }
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  // Helper function to maintain the heap property (downwards)
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

// Function to calculate the minimum cost of connecting ropes
function calculateMinCost() {
  const inputElement = document.getElementById('rope-lengths');
  const resultElement = document.getElementById('result');

  const ropeLengths = inputElement.value.split(',').map(Number);

  // Create a min-heap to store the rope lengths
  const minHeap = new MinHeap();

  // Push rope lengths into the min-heap
  for (const length of ropeLengths) {
    minHeap.push(length);
  }

  let totalCost = 0;

  // Combine the ropes until there's only one rope left in the heap
  while (minHeap.heap.length > 1) {
    const firstRope = minHeap.pop();
    const secondRope = minHeap.pop();

    const combinedLength = firstRope + secondRope;
    totalCost += combinedLength;

    minHeap.push(combinedLength);
  }

  resultElement.textContent = `Minimum cost of connecting ropes: ${totalCost}`;
}
