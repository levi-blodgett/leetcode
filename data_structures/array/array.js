// A data structure that allows you to store and retrieve data in a First In First Out (FIFO) order.

// EXAMPLE

// Initialize an empty array
const array = []; // []

// Push three items onto the array
array.push(4); // [4]
array.push(5); // [4, 5]
array.push(6); // [4, 5, 6]
array.push(7); // [4, 5, 6, 7]
console.log(array); // [4, 5, 6, 7]

// Example methods:
[4, 5, 6, 7].at(1); // 5
[4, 5, 6, 7].push(8); // [4, 5, 6, 7, 8]
[4, 5, 6, 7].pop(); // [4, 5, 6]
[4, 5, 6, 7].fill(1); // [1, 1, 1, 1]
[4, 5, 6, 7].join(' '); // '4 5 6 7'
[4, 5, 6, 7].shift(); // [5, 6, 7]
[4, 5, 6, 7].reverse(); // [7, 6, 5, 4]
[4, 5, 6, 7].unshift(3); // [3, 4, 5, 6, 7]
[4, 5, 6, 7].includes(6); // true
[4, 5, 6, 7].map(item => 2 * item); // [8, 10, 12, 14]
[4, 5, 6, 7].filter(item => item > 5); // [6, 7]
[4, 5, 6, 7].find(item => item > 5); // 6 (first match)
[4, 5, 6, 7].every(item => item > 4); // false
[4, 5, 6, 7].findIndex(item => item === 5); // 1
[4, 5, 6, 7].reduce((prev, curr) => prev + curr, 0); // 22