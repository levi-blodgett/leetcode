// A linear data structure that follows the first-in, first-out (FIFO) principle.
// FIFO means the elements added to the queue are added to the back, and the elements removed from the queue are removed from the front.
// To implement a queue, use an array or an object with a push() method and a shift() method.

// EXAMPLE

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.isEmpty()); // true