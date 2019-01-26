const sumNums = require('./sumNumInRange.js');
const assert = require('assert');

// testing with smaller number first
it('correctly calculates the sum of the numbers in the range 1 to 4', () => {
    assert.equal(sumNums.sumAll([1, 4]), 10);
});

// testing with larger number first
it('correctly calculates the sum of the numbers in the range 1 to 4', () => {
    assert.equal(sumNums.sumAll([4, 1]), 10);
});