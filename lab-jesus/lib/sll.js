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

    return this;
  }

  remove(index) {
    var currentNode = this.head, count=0, previous;
  //if list is empty, exit out
  if(this._length===0) return;

  //Check if first node
  if(index===0){
      this.head = currentNode.next;
      this._length--;
  }else{

      while(count<index){
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
      }//end while

      previous.next = currentNode.next;

      return previous;
  }// end if
  }
}

module.exports = SLL;
