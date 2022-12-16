export default class ListNode {
    // Constructor function for creating a new ListNode
    // Takes in a value and an optional next node
    // If no next node is provided, sets the next node to null
    constructor(v, n = null) {
        this.value = v; // Value of the node
        this.next = n; // Next node in the linked list
    }

    // Returns the next node in the linked list
    getNext() {
        return this.next;
    }

    // Sets the next node in the linked list
    setNext(n) {
        this.next = n;
    }

    // Returns the value of the node
    getValue() {
        return this.value;
    }

    // Sets the value of the node
    setValue(v) {
        this.value = v;
    }

    // Returns the value of the node as a string
    toString() {
        return String(this.value);
    }

    // Returns a boolean indicating whether the node has a next node
    hasNext() {
        if (this.getNext() === null) {
            return false;
        }
        return true;
    }
}