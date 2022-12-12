from leetcode.py_data_structures.linkedList import *


class Solution:
    def mergeTwoListsRecursive(self, l1, l2):
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        if l1.value < l2.value:
            l1.next = self.mergeTwoListsRecursive(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoListsRecursive(l1, l2.next)
            return l2

    def node(self, v=None, n=None):
        self.head = v
        self.next = n

    def mergeTwoListsIterative(self, l1, l2):
        # maintain an unchanging reference to node ahead of the return node.
        prehead = ListNode(-1)
        prev = prehead
        while l1 and l2:
            if l1.value <= l2.value:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next
            prev = prev.next
        # At least one of l1 and l2 can still have nodes at this point, so connect
        # the non-null list to the end of the merged list.
        if l1 is not None:
            prev.next = l1
        else:
            prev.next = l2
        return prehead.next


def main():
    list1 = LinkedList()
    list1.add(5)
    list1.add(4)
    list1.add(2)
    list1.add(1)
    list1.printList()
    list1 = list1.head

    list2 = LinkedList()
    list2.add(4)
    list2.add(3)
    list2.add(1)
    list2.printList()
    list2 = list2.head

    Solution().mergeTwoListsIterative(list1, list2)


main()
