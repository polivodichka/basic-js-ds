const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    this.list != null ? this.insert(this.list, newNode) : this.list = newNode;
  }
  
  insert(list, newNode) {    
    if (list.next === null) list.next = newNode;
    else this.insert(list.next, newNode);
  }

  dequeue() {
    let firstValue = this.list.value;
    this.list = this.list.next;
    return firstValue;
  }
}

module.exports = {
  Queue
};
