// A special type of tree-based data structure that satisfies the heap property:
// if B is a child node of A, then the key (the value) of A is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the key of B.
// This property, also known as the heap invariant, allows a heap to be stored in an array and efficiently support the operations of inserting and deleting nodes.
// Used in implementing priority queues, and they are also used in certain graph algorithms such as Dijkstra's algorithm for finding the shortest path between two nodes.

// EXAMPLE
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Adds a new element to the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Removes the element with the minimum value from the heap
    delete() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // Returns the element with the minimum value in the heap
    getMin() {
        return this.heap[0];
    }

    // Maintains the heap property by swapping the element at the given index with its parent
    heapifyUp(index) {
        let current = index || this.heap.length - 1;
        let parent = Math.floor((current - 1) / 2);

        while (this.heap[current] < this.heap[parent]) {
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
            current = parent;
            parent = Math.floor((current - 1) / 2);
        }
    }

    // Maintains the heap property by swapping the element at the given index with its smaller child
    heapifyDown(index = 0) {
        let current = index;
        let left = 2 * current + 1;
        let right = 2 * current + 2;
        let minIndex = current;

        if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
            minIndex = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
            minIndex = right;
        }
        if (minIndex !== current) {
            [this.heap[current], this.heap[minIndex]] = [this.heap[minIndex], this.heap[current]];
            this.heapifyDown(minIndex);
        }
    }
}

// Create a new instance of the MinHeap class
const heap = new MinHeap();

// Insert the values 5, 2, 10, and 1 into the heap
heap.insert(5);
heap.insert(2);
heap.insert(10);
heap.insert(1);

// Get the minimum value in the heap (which should be 1) and log it to the console
// console.log(heap.getMin()); // outputs 1

// Remove the minimum value from the heap
heap.delete();

// Get the new minimum value in the heap (which should be 2) and log it to the console
// console.log(heap.getMin()); // outputs 2

// Print the entire heap
// console.log(heap);