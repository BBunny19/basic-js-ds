const { NotImplementedError } = require('../extensions/index.js');


class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value)
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(value)
    }
    this.length++
  }

  dequeue() {

    let last = this.head;
    this.head = this.head.next;

    return last.value
  }
}

module.exports = {
  Queue
};
