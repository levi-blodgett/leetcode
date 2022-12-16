// Given the head of a singly linked list, reverse the list, and return the reversed list. given the following restraints: First restraint: The number of nodes in the list is the range [0, 5000]. Second restraint: -5000 <= Node.val <= 5000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListIterative = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

var reverseListRecursively = function (head) {
    if (!head || !head.next) return head;
    let newHead = reverseListRecursively(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};