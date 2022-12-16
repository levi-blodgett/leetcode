// A data structure that is a collection of unique values.
// It can be used to store a list of values that are unique, meaning there are no duplicates.
// Useful when you need to store a collection of unique values, and you don't need any particular order.
// Faster than an array when checking if a value is already in the set/array.

// EXAMPLE
// create a set using the Set constructor
const set = new Set();

// add values to a set
set.add(1);
set.add(2);
set.add(3);

// check if a set contains a particular value
console.log(set.has(1));  // outputs true
console.log(set.has(4));  // outputs false

//  remove a value from a set
set.delete(2);

// iterate over the values in a set
for (const value of set) {
    console.log(value);
}

// remove all values from the set
set.clear();

// get the number of values in the set
console.log(set.size);  // outputs 0