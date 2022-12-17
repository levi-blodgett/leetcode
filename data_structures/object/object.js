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
console.log(person.name);  // Output: "John Smith"
console.log(person['name']);  // Output: "John Smith"

// add, modify, or delete properties from an object using the same notation
person.email = "john.smith@example.com";  // Add a new property
person.age = 31;  // Modify an existing property
delete person.occupation;  // Delete a property
