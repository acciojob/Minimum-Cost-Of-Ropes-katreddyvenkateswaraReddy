function calculateMinCost() {
  const inputElement = document.getElementById('inputRopes');
  const resultElement = document.getElementById('result');
  
  const inputText = inputElement.value;
  const ropeLengths = inputText.split(',').map(Number);
  
  if (ropeLengths.length < 2) {
    resultElement.innerHTML = 'Minimum cost cannot be calculated with fewer than 2 ropes.';
    return;
  }

  // Create a min-heap to keep track of rope lengths
  const minHeap = new MinHeap();

  // Insert all rope lengths into the min-heap
  for (const length of ropeLengths) {
    minHeap.insert(length);
  }

  let minCost = 0;

  // Merge ropes until there's only one rope left in the heap
  while (minHeap.size() > 1) {
    const firstRope = minHeap.extractMin();
    const secondRope = minHeap.extractMin();
    const newRopeLength = firstRope + secondRope;

    minCost += newRopeLength;
    minHeap.insert(newRopeLength);
  }

  resultElement.innerHTML = `Minimum cost to connect ropes: ${minCost}`;
}

// MinHeap class to implement the min-heap data structure
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return minValue;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.sinkDown(smallest);
    }
  }
}
