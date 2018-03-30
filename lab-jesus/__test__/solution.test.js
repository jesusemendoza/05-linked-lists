'use strict';

const SLL = require('../lib/sll.js');

describe ('Solution Module', () => {
  describe ('SLL', () => {
    it ('Invalid - Return null for empy value', () => {
      var sll0 = new SLL();

      sll0.insertEnd(9);
      sll0.insertEnd();
      sll0.insertEnd(6);
      sll0.insertEnd(4);
      sll0.insertEnd(5);

      expect(sll0.findMiddle()).toBeNull();
    });

    it ('Valid - should check for the middle value', () => {
      var sll1 = new SLL();

      sll1.insertEnd(24);
      sll1.insertEnd(1);
      sll1.insertEnd(44);
      sll1.insertEnd(4);
      sll1.insertEnd(65);

      expect(sll1.findMiddle()).toBe(44);
    });

    it ('Valid - should take the lower node value if there is an even number of nodes', () => {
      var sll2 = new SLL();
      
      sll2.insertEnd(5);
      sll2.insertEnd(15);
      sll2.insertEnd(89);
      sll2.insertEnd(24);

      expect(sll2.findMiddle()).toBe(15);
    });
  });
});