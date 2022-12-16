import ListNode from './listNode.js';
import LinkedList from './linkedList.js';

// Define a Solution class to contain the logic for merging two linked lists
class Solution {
  // A method to merge two linked lists using a recursive approach
  mergeTwoListsRecursive(l1, l2) {
    // Catch empty lists
    if (l1 === null && l2 === null) {
      return -1;
    } else if (l2 === null) {
      return l1;
    } else if (l1 === null) {
      return l2;
    }

    // Compare the values of the nodes at the head of each linked list
    // Append the smaller value to the merged linked list and recursively call the function on the remaining nodes
    if (l1.value < l2.value) {
      l1.next = this.mergeTwoListsRecursive(l1.next, l2);
      return l1;
    } else {
      l2.next = this.mergeTwoListsRecursive(l1, l2.next);
      return l2;
    }
  }

  // A method to merge two linked lists using an iterative approach
  mergeTwoListsIterative(l1, l2) {
    // Create a dummy node at the head of the merged linked list
    const prehead = new ListNode(-1);
    let prev = prehead;

    // While both linked lists have nodes, compare the values at the head of each list
    // Append the smaller value to the merged linked list and move the pointer to the next node in the appropriate list
    while (l1 && l2) {
      if (l1.value <= l2.value) {
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
      prev = prev.next;
    }

    // At least one of the linked lists is empty at this point, so append the remaining nodes from the non-empty list
    if (l1 === null) {
      prev.next = l2;
    } else {
      prev.next = l1;
    }

    // Return the merged linked list, starting from the dummy node's next node
    return prehead.next;
  }
}

// Call this function to do the heavy lifting
function main() {
  // Create a new Solution instance
  const solution = new Solution();
  // Create a linked list
  const list1 = new LinkedList();
  // Create another linked list
  const list2 = new LinkedList();

  // Add nodes to the first linked list
  list1.add(5);
  list1.add(4);
  list1.add(2);
  list1.add(1);

  // Add nodes to the second linked list
  list2.add(4);
  list2.add(3);
  list2.add(1);

  // Store the heads of the linked lists as variables
  const list2Head = list2.head;
  const list1Head = list1.head;

  // Merge the two linked lists using the iterative method
  const result = solution.mergeTwoListsIterative(list1Head, list2Head);
}

// Run the main function
main();