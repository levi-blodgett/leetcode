// A data structure that stores a collection of values
// A hashset does not maintain the order of its elements and does not allow duplicate values.
// Faster than arrays at finding out if an element is contained.
// Faster at inserting and retrieving values than a treeset

// EXAMPLE

const hashSet = new Set();

// Add elements to the hash set
hashSet.add(1);
hashSet.add(2);
hashSet.add(3);

// Check if an element is in the hash set
console.log(hashSet.has(1)); // outputs true
console.log(hashSet.has(4)); // outputs false

// Remove an element from the hash set
hashSet.delete(2);

// Iterate over the elements in the hash set
for (const value of hashSet) {
    console.log(value);
}
// Output:
// 1
// 3