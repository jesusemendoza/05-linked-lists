'use strict';
const Nd = require('./nd.js');

class SLL {
  constructor() { // Big-O:  O(1)
    this.head = null;
  }
  insertHead(val) { // Big-O:  O(1)
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }
  insertEnd(val) { // Big-O runtime:  O(1) if no head, O(n) if there is a head
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }
  findMiddle() { // Big-O runtime:  O(1)
    let counter = 0;
    for(var itr = this.head; itr.next; itr = itr.next) {
      if (itr.value == null) {
        console.log(itr.value);
        return null;
      }
       
      counter++;
    }
    let middle = Math.floor(counter/2);
    let newCounter = 0;
    for(var itrNew = this.head; newCounter < middle; itrNew = itrNew.next) {
      newCounter++;
    }
    return itrNew.value;
  }
  reverse() { // Big-O runtime:  O(1) if no head, O(n) otherwise
    let revArray = [];
    for(var itr = this.head; itr.next; itr = itr.next) {
      revArray.push(itr.value);
    }

    revArray.reverse();
    console.log(revArray.reverse());

    let count = revArray.length;

    for(var itrRev = this.head; itrRev.next; itrRev = itrRev.next) {
      this.value = revArray[count];
      count--;
    }

    return this;
  }

  removeNode(value) { // Big-O runtime:  O(1) if no head, O(n) otherwise
    if(!value) return null;
    if(!this.head) {
      return this;
    }
    let testNode = this.head;
    while(testNode.next.value != value) {
      testNode = testNode.next;
    }
    testNode.next = testNode.next.next;
    return this;

  }
}

module.exports = SLL;

