import LinkedListNode from './LinkedListNode';

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    append(value) {
        const node = new LinkedListNode(value);

        if (!this.tail) {
            this.head = this.tail = node;
            this.length++;
            return node;
        }

        this.tail.next = node;
        this.tail = node;

        this.length++;
        return node;
    }

    prepend(value) {
        const node = new LinkedListNode(value);

        if (!this.head) {
            this.head = this.tail = node;
            this.length++;
            return node;
        }

        node.next = this.head;
        this.head = node;

        this.length++;
        return node;
    }

    removeFirst() {
        if (!this.head) return null;

        const nodeToRemove = this.head;
        this.head = nodeToRemove.next;

        nodeToRemove.next = null;

        if (nodeToRemove === this.tail) {
            this.tail = null;
        }

        this.length--;
        return nodeToRemove;
    }

    removeLast() {
        if (!this.tail) return null;

        const nodeToRemove = this.tail;
        const beforeLast = this.findNodeBeforeNode(nodeToRemove);
        beforeLast.next = null;

        this.tail = beforeLast;

        if (nodeToRemove === this.head) {
            this.head = null;
        }

        this.length--;
        return nodeToRemove;
    }

    findNodeBeforeNode(node) {
        if (!node) return null;

        let current = this.head;

        while (current.next !== node) {
            current = current.next;
        }

        return current;
    }

    insert(asIndex, value) {
        let current = this.head;
        let previous = null;
        let index = 0;

        if (asIndex < 0 || !asIndex) {
            return this.prepend(value);
        }

        if (asIndex > this.length) {
            return this.append(value);
        }

        const nodeToInsert = new LinkedListNode(value);

        while (current && asIndex !== index) {
            previous = current;
            current = current.next;
            index++;
        }

        previous.next = nodeToInsert;
        nodeToInsert.next = current;

        this.length++;
        return nodeToInsert;
    }

    remove(index) {}

    printList() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

export default LinkedList;
