// A data type that is used to represent a collection of properties.
// An object is an unordered set of key-value pairs, where the keys are strings and the values can be of any data type, including other objects.

// EXAMPLE
const person = {
    name: "John Smith",
    age: 30,
    occupation: "Software Developer",
    address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zip: 10001
    }
};

// access the properties of an object using dot notation or square bracket notation
console.log("Example 1:"); // Log formatting
console.log(person.name);  // Output: "John Smith"
console.log(person['name']);  // Output: "John Smith"
console.log(); // Empty space for log formatting

// add, modify, or delete properties from an object using the same notation
person.email = "john.smith@example.com";  // Add a new property
person.age = 31;  // Modify an existing property
delete person.occupation;  // Delete a property

// EXAMPLE 2
class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        if (Object.keys(this.items).length == 0) {
            return "Empty";
        }
        delete this.items[this.top];
        this.top--;
    }
}

let stack = new Stack()
console.log("Example 2:"); // Log formatting
console.log(stack.pop());
stack.push("John")
stack.push("Jeff")
stack.push("George")
console.log(stack.pop());
console.log(stack);