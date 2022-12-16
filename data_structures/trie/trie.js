// Pronounced "try"
// A tree-like data structure that is used to:
// store and retrieve large collections of data, stored in individual alphanumeric nodes in a tree-structure. Dictionary or IP addresses in a routing table.
//
//      root
//       |
//       t
//       |
//       e
//      / \
//     d   s
//        / \
//       l   t
//       |
//       a
// 'test', 'tesla', and 'ted' in a trie

// EXAMPLE
class TrieNode {
    // Constructor for creating a new TrieNode
    constructor(value) {
        // The value of the node (e.g. 'a', 'b', etc.)
        this.value = value;
        // An object to store the children nodes of the current node
        this.children = {};
        // A boolean to indicate whether the current node represents the end of a word
        this.isWord = false;
    }

    // Method for adding a child node to the current node
    addChild(childValue) {
        // If the child node with the specified value doesn't exist, create a new one
        if (!this.children[childValue]) {
            this.children[childValue] = new TrieNode(childValue);
        }
        // Return the child node
        return this.children[childValue];
    }
}

class Trie {
    // Constructor for creating a new Trie
    constructor() {
        // Create the root node with an empty value
        this.root = new TrieNode("");
    }

    // Method for adding a word to the trie
    addWord(word) {
        // Start at the root node
        let currentNode = this.root;
        // Iterate through the letters of the word
        for (const letter of word) {
            // Add a child node for each letter and move to the child node
            currentNode = currentNode.addChild(letter);
        }
        // Set the isWord property of the last node to true to indicate that it represents the end of a word
        currentNode.isWord = true;
    }

    // Method for searching for a word in the trie
    search(word) {
        // Start at the root node
        let currentNode = this.root;
        // Iterate through the letters of the word
        for (const letter of word) {
            // If a child node with the current letter doesn't exist, return false
            if (!currentNode.children[letter]) {
                return false;
            }
            // Move to the child node
            currentNode = currentNode.children[letter];
        }
        // Return the value of the isWord property of the last node
        return currentNode.isWord;
    }

    // Method for checking if a prefix is present in the trie
    startsWith(prefix) {
        // Start at the root node
        let current = this.root;
        // Iterate through the letters of the prefix
        for (let i = 0; i < prefix.length; i++) {
            // Get the current letter
            let char = prefix[i];
            // If a child node with the current letter doesn't exist, return false
            if (!current.children[char]) {
                return false;
            }
            // Move to the child node
            current = current.children[char];
        }
        // If all the letters of the prefix are present in the trie, return true
        return true;
    }
}

// Create a new trie
const trie = new Trie();

// Add some words to the trie
trie.addWord("hello");
trie.addWord("world");
trie.addWord("hi");

// Search for some words in the trie
console.log(trie.search("hello"));  // true
console.log(trie.search("world"));  // true
console.log(trie.search("hi"));     // true
console.log(trie.search("hey"));    // false
console.log(trie.startsWith("he"));  // true
console.log(trie.startsWith("hi"));  // true
console.log(trie.startsWith("ho"));  // false