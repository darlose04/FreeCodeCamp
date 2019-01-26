const sumNums = require('./sumNumInRange.js');
const assert = require('assert');

// sumNumInRange
// testing with smaller number first
it('correctly calculates the sum of the numbers in the range 1 to 4', () => {
    assert.equal(sumNums.sumAll([1, 4]), 10);
});

it('correctly calculates the sum of the numbers in the range 1 to 4', () => {
    assert.equal(sumNums.sumAll([5, 10]), 45);
});

// testing with larger number first
it('correctly calculates the sum of the numbers in the range 1 to 4', () => {
    assert.equal(sumNums.sumAll([4, 1]), 10);
});

it('correctly calculates the sum of the numbers in the range 1 to 4', () => {
    assert.equal(sumNums.sumAll([10, 5]), 45);
});