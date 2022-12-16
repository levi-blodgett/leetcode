// A data structure that is used to:
// store and organize data in a hierarchical structure.
// Each node in the tree has a value, and may have one or more child nodes. This allows data to be organized and accessed in a hierarchical manner, where nodes at higher levels of the tree represent broader or more general data, and nodes at lower levels represent more specific or detailed data.

// EXAMPLE

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

const root = new TreeNode(1);

// Add some children to the root node
root.addChild(new TreeNode(2));
root.addChild(new TreeNode(3));
root.addChild(new TreeNode(4));

// Add some grandchildren to the root node's children
root.children[0].addChild(new TreeNode(5));
root.children[0].addChild(new TreeNode(6));
root.children[1].addChild(new TreeNode(7));

// The tree now looks like this:
//
//     1
//    /|\
//   2 3 4
//  /| |
// 5 6 7