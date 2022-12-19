export default class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Adds a node to the priority queue
    enqueue(node, priority) {
        this.heap.push({ node, priority });
        this.bubbleUp();
    }

    // Removes and returns the node with the highest priority from the priority queue
    dequeue() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown();
        }
        return root.node;
    }

    // Returns a boolean indicating whether the priority queue is empty
    isEmpty() {
        return this.heap.length === 0;
    }

    // Bubbles up the last element in the heap to maintain the heap property
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element.priority >= parent.priority) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    // Sinks down the root element in the heap to maintain the heap property
    sinkDown() {
        let index = 0;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            const leftChild = this.heap[leftChildIndex];
            const rightChild = this.heap[rightChildIndex];
            let swap = null;

            if (leftChild && leftChild.priority < this.heap[index].priority) {
                swap = leftChildIndex;
            }

            if (rightChild && rightChild.priority < (swap === null ? this.heap[index].priority : leftChild.priority)) {
                swap = rightChildIndex;
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = this.heap[index];
            index = swap;
        }
    }
}
