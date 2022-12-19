// Define the input numbers and target sum
const numbers = [2, 7, 11, 15];
const target = 22;

function twoSum(numbers, target) {
  // Initialize an empty hashmap
  const hashmap = new Map();
  // Iterate over the numbers
  for (let i = 0; i < numbers.length; i++) {
    // Compute the complement
    const complement = target - numbers[i];
    // Check if the complement exists in the hashmap
    if (hashmap.get(complement)) {
      // Return the indices of the two numbers
      return [i, hashmap.get(complement)];
    }
    // Add the current number and its index to the hashmap
    hashmap.set(numbers[i], i);
  }
}

// Print the result to the console
console.log(twoSum(numbers, target));