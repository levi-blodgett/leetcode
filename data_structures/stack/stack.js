// A data structure that allows you to store and retrieve data in a Last In First Out (LIFO) order.

// EXAMPLE

// Initialize an empty stack
const stack = new Stack()
const array_stack = [];

// Push three items onto the stack
array_stack.push(1);
array_stack.push(2);
array_stack.push(3);

// The stack now contains [1, 2, 3]
console.log(array_stack);

// Retrieve the last item from the stack
const item1 = array_stack.pop(); // item1 is 3

// The stack now contains [1, 2]
console.log(array_stack);

// Retrieve the last item from the stack again
const item2 = array_stack.pop(); // item2 is 2

// The stack now contains [1]
console.log(array_stack);
