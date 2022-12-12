class ListNode(object):
    def __init__(self, v, n=None):
        self.value = v
        self.next = n

    def getNext(self):
        return self.next

    def setNext(self, n):
        self.next = n

    def getValue(self):
        return self.value

    def setValue(self, v):
        self.value = v

    def toString(self):
        return str(self.value)

    def hasNext(self):
        if self.getNext() is None:
            return False
        return True


class LinkedList (object):
    def __init__(self, h=None):
        self.head = h
        self.length = 0

    def getLength(self):
        return self.length

    def add(self, v):
        newNode = ListNode(v, self.head)
        self.head = newNode
        self.length += 1

    def remove(self, v):
        currentNode = self.head
        prevNode = None
        while currentNode:
            if currentNode.getValue() == v:
                if prevNode:
                    prevNode.setNext(currentNode.getNext())
                else:
                    self.head = currentNode.getNext()
                self.length -= 1
                return True
            else:
                prevNode = currentNode
                currentNode = currentNode.getNext()
        return False

    def find(self, v):
        currentNode = self.head
        while currentNode:
            if currentNode.getValue() == v:
                return v
            else:
                currentNode = currentNode.getNext()
        return None

    def printList(self):
        if self.head is None:
            return
        currentNode = self.head
        print(currentNode.toString() + " => "),
        while currentNode.hasNext():
            currentNode = currentNode.getNext()
            print(currentNode.toString() + " => "),
        print("None")
