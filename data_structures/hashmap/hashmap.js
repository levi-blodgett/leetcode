// AKA dictionary, associative array
// a data structure that maps keys to values. It allows you to store and retrieve values based on a unique key.

// EXAMPLE

// Initialize an empty hashmap
const hashmap = new Map();

// Add three key-value pairs to the hashmap
hashmap.set('key1', 'value1');
hashmap.set('key2', 'value2');
hashmap.set('key3', 'value3');

console.log(hashmap); // {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}

// Retrieve a value from the hashmap using its key
const value1 = hashmap.get('key1');
console.log(value1); // 'value1'

// Update a value in the hashmap
hashmap.set('key1', 'newValue1');
console.log(hashmap.get('key1')); // newValue1

// Remove a key-value pair from the hashmap
hashmap.delete('key1');
console.log(hashmap); // {'key2': 'value2', 'key3': 'value3'}