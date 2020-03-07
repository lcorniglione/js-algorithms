
export default class Heap {
    constructor(comparableFn) {

        if (!comparableFn || typeof comparableFn !== 'function') {
            throw new Error('You must provide a comparable function');
        }

        this.heap = [];
        this.comparableFn = comparableFn;
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) > 0;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) > 0;
    }

    getParent(childIndex) {
        return this.heap[this.getParentIndex(childIndex)];
    }

    getLeftChild(parentIndex) {
        return this.heap[this.getLeftChildIndex(parentIndex)];
    }

    getRightChild(parentIndex) {
        return this.heap[this.getRightChildIndex(parentIndex)];
    }

    add(item) {
        this.heap.push(item);
        this.orderHeapUp();
    }

    toString() {
        return this.heap.toString();
    }

    swap(childIndex, parentIndex) {
        const tmp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[childIndex];
        this.heap[childIndex] = tmp;
    }

    orderHeapUp() {
        let lastIndex = this.heap.length - 1;

        while (this.hasParent(lastIndex) && this.hasToChangeValues(this.heap[lastIndex], this.getParent(lastIndex))) {
            this.swap(lastIndex, this.getParentIndex(lastIndex));
            lastIndex = this.getParentIndex(lastIndex);
        }
    }

    orderHeapDown() {
        let startIndex = 0;
        let nextIndex = null;

        while (this.hasLeftChild(startIndex)) {
            if (this.hasRightChild(startIndex) && this.hasToChangeValues(this.getRightChild(startIndex), this.getLeftChild(startIndex))) {
                nextIndex = this.getRightChildIndex(startIndex);
            } else {
                nextIndex = this.getLeftChildIndex(startIndex);
            }

            if (!this.hasToChangeValues(this.heap[nextIndex], this.heap[startIndex])) break;

            this.swap(nextIndex, startIndex);
            startIndex = nextIndex;
        }
    }

    peek() {
        if (!this.heap.length) return null;

        return this.heap[0];
    }

    poll() {
        if (!this.heap.length) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const rootItem = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.orderHeapDown();

        return rootItem;
    }

    hasToChangeValues(child, parent) {
        return this.comparableFn(child, parent);
    }
}