// A data structure that stores a set of values in a way that allows for fast insertion, retrieval, and traversal of the values in sorted order.
// Values are stored in a specific order, based on their values.
// Implemented using a balanced tree data structure, such as a red-black tree or an AVL tree.
// Faster at traversing the values in the set in sorted order, and at performing operations such as finding the minimum or maximum value than a hashset

// EXAMPLE

class TreeSet {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = new TreeNode(value);
                    return;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = new TreeNode(value);
                    return;
                }
                current = current.right;
            } else {
                // value is already present in the tree, so we don't need to add it again
                return;
            }
        }
    }

    contains(value) {
        let current = this.root;
        while (current !== null) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // other methods such as remove, min, max, etc. could be implemented as well
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const set = new TreeSet();
set.add(1);
set.add(2);
set.add(3);

console.log(set.contains(2)); // true
console.log(set.contains(4)); // false
