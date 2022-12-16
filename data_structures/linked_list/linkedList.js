import ListNode from './listNode.js';

export default class LinkedList {
    // Constructor function for creating a new LinkedList
    // Takes in an optional head node
    // If no head node is provided, sets the head node to null
    // Initializes the length of the linked list to 0
    constructor(h = null) {
        this.head = h; // Head node of the linked list
        this.length = 0; // Length of the linked list
    }

    // Returns the length of the linked list
    getLength() {
        return this.length;
    }

    // Adds a new node with the given value to the head of the linked list
    // Increments the length of the linked list
    add(v) {
        const newNode = new ListNode(v, this.head); // Create a new node with the given value and the current head node as the next node
        this.head = newNode; // Set the head node to the new node
        this.length += 1; // Increment the length of the linked list
    }

    // Removes the first node in the linked list with the given value
    // Returns a boolean indicating whether a node was successfully removed
    remove(v) {
        let currentNode = this.head; // Start at the head node
        let prevNode = null; // Keep track of the previous node (initially set to null)
        while (currentNode) {
            // Iterate through the linked list until the end is reached or the node with the given value is found
            if (currentNode.getValue() === v) {
                // If the value of the current node is equal to the given value, remove the node
                if (prevNode) {
                    // If the current node is not the head node, set the next node of the previous node to the next node of the current node
                    prevNode.setNext(currentNode.getNext());
                } else {
                    // If the current node is the head node, set the head node to the next node of the current node
                    this.head = currentNode.getNext();
                }
                this.length -= 1; // Decrement the length of the linked list
                return true; // Return true indicating that the node was successfully removed
            } else {
                prevNode = currentNode; // Update the previous node to be the current node
                currentNode = currentNode.getNext(); // Update the current node to be the next node
            }
        }
        return false; // Return false if the node with the given value was not found
    }

    // Finds the first node in the linked list with the given value
    // Returns the value of the node if found, otherwise returns null
    find(v) {
        let currentNode = this.head; // Start at the head node
        while (currentNode) {
            // Iterate through the linked list until the end is reached or the node with the given value is found
            if (currentNode.getValue() === v) {
                return v; // Return the value of the node if found
            } else {
                currentNode = currentNode.getNext(); // Update the current node to be the next node
            }
        }
        return null; // Return null if the node with the given value was not found
    }

    // Prints the values of the nodes in the linked list
    printList() {
        let output = "";
        if (this.head === null) { // Return if the linked list is empty
            return;
        }
        let currentNode = this.head; // Start at the head node
        output += currentNode.toString() + " => "; // Add the value of the current node to the output
        while (currentNode.hasNext()) {
            currentNode = currentNode.getNext(); // Update the current node to be the next node
            output += currentNode.toString() + " => "; // Add the value of the current node to the output
        }
        output += "None"; // Add "None" after reaching the end of the linked list
        console.log(output); // Print list
    }
}