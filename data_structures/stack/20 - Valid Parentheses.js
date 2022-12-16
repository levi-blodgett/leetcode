// Define the input string of parentheses
const parentheses = "[](){}";

// Define the Solution class
class Solution {
  // Define the isValid method
  isValid(s) {
    // Initialize an empty stack
    const stack = [];

    // Define a mapping of closing parentheses to their corresponding opening parentheses
    const mapping = { ")": "(", "}": "{", "]": "[" };

    // Iterate over the characters in the input string
    for (const char of s) {
      // Check if the character is a closing parenthesis
      if (char in mapping) {
        // If the stack is empty, set the top element to '#'
        const topElement = stack.pop() || "#";

        // If the top element doesn't match the closing parenthesis, return false
        if (mapping[char] !== topElement) {
          return false;
        }
      } else {
        // If the character is an opening parenthesis, push it onto the stack
        stack.push(char);
      }
    }

    // Return true if the stack is empty, otherwise return false
    return !stack.length;
  }
}

// Create a new Solution object
const solution = new Solution();

// Call the isValid method
const result = solution.isValid(parentheses);

// Print the result to the console
console.log(result);