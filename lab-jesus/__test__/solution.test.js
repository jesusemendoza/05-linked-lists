'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Two Largest', function() {
    it('should take in an empty argument and return null', function() {
      expect(solution.numPass()).toEqual(null);
    });
    it('should take in a number and return not a number', function() {
      expect(solution.numPass(5)).toEqual('not an object');
    });

    it('should take in an object and return the sum of all of the values', function() {
      expect(solution.numPass({value: 5, next: {value: 5, next: {value: 5, next: null}}})).toEqual(15);
    });

    it('should take in an object and return the sum of all of the values', function() {
      expect(solution.numPass({value: 5, next: {value: 'string', next: {value: 5, next: null}}})).toEqual('one value in the object is not a number');
    });

  });
});