// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list without looping. Constraints: The number of nodes in the list is n, 1 <= n <= 500, -500 <= Node.val <= 500, 1 <= left <= right <= n

class Solution {
    reverseBetween(head, m, n) {
        // Empty list
        if (!head) {
            return null;
        }

        // Move the two pointers until they reach the proper starting point
        // in the list.
        let cur = head;
        let prev = null;
        while (m > 1) {
            prev = cur;
            cur = cur.next;
            m -= 1;
            n -= 1;
        }

        // The two pointers that will fix the final connections.
        const tail = cur;
        const con = prev;

        // Iteratively reverse the nodes until n becomes 0.
        while (n) {
            const third = cur.next;
            cur.next = prev;
            prev = cur;
            cur = third;
            n -= 1;
        }

        // Adjust the final connections as explained in the algorithm
        if (con) {
            con.next = prev;
        } else {
            head = prev;
        }
        tail.next = cur;
        return head;
    }
}