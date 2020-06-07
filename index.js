// PLAYGROUND

import Heap from './src/data-structures/heaps/Heap';
import LinkedList from './src/data-structures/linked-list/LinkedList';

// HEAPS

function maxHeapFn(child, parent) {
    return child >= parent;
}

const maxHeap = new Heap(maxHeapFn);

maxHeap.add(2);
maxHeap.add(3);
maxHeap.add(20);
maxHeap.add(1);
maxHeap.add(5);
maxHeap.add(6);
maxHeap.add(10);
maxHeap.add(9);
maxHeap.add(8);
maxHeap.add(16);
maxHeap.add(14);
maxHeap.add(19);
maxHeap.add(11);
maxHeap.add(21);

console.log(maxHeap.toString());

const maxValue = maxHeap.poll();

console.log('resulted heap', maxHeap.toString());
console.log('max value', maxValue);

function minHeapFn(child, parent) {
    return child <= parent;
}

const minHeap = new Heap(minHeapFn);

minHeap.add(2);
minHeap.add(3);
minHeap.add(20);
minHeap.add(1);
minHeap.add(5);
minHeap.add(6);
minHeap.add(10);
minHeap.add(9);
minHeap.add(8);
minHeap.add(16);
minHeap.add(14);
minHeap.add(19);
minHeap.add(11);
minHeap.add(21);

console.log(minHeap.toString());

const minValue = minHeap.poll();

console.log('resulted heap', minHeap.toString());
console.log('min value', minValue);

// LINKED LIST

const list = new LinkedList();

list.append(5);
list.append(8);
list.append(7);
list.append(10);
list.prepend(1);
list.prepend(2);
list.removeFirst();
list.removeLast();
list.insert(2, 4);
list.printList();
console.log(list);
