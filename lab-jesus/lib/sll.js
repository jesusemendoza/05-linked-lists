'use strict';
const Nd = require('./nd.js');

class SLL {
  constructor() {
    this.head = null;
  }
  insertHead(val) {
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }
  insertEnd(val) {
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }
  findMiddle() {
    let counter = 0;
    for(var itr = this.head; itr.next; itr = itr.next) {
      counter++;
    }
    let middle = Math.floor(counter/2);
    console.log(middle);
    let newCounter = 0;
    for(var itrNew = this.head; newCounter < middle; itrNew = itrNew.next) {
      newCounter++;
    }
    console.log(itrNew.next);
    return itrNew;
  }
  reverse() {
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



    // let middle = Math.floor(counter/2);
    // console.log(middle);
    // let newCounter = 0;
    // for(var itrNew = this.head; newCounter < middle; itrNew = itrNew.next) {
    //   newCounter++;
    // }
    return this;
  }
}

module.exports = SLL;
