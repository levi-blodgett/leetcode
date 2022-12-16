// A data structure that allows you to store and retrieve data in a Last In First Out (LIFO) order.

// EXAMPLE

// Initialize an empty stack
const stack = [];

// Push three items onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// The stack now contains [1, 2, 3]
console.log(stack);

// Retrieve the last item from the stack
const item1 = stack.pop(); // item1 is 3

// The stack now contains [1, 2]
console.log(stack);

// Retrieve the last item from the stack again
const item2 = stack.pop(); // item2 is 2

// The stack now contains [1]
console.log(stack);
