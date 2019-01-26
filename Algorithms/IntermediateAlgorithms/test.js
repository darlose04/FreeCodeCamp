const sumNums = require('./sumNumInRange.js');
const diffArray = require('./diffTwoArrays.js');
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

// difference of two arrays testing
it('correctly returns an array of the symmetric differences between two arrays', () => {
    assert.equal(diffArray.diffArray([1,2,3,5], [1,2,3,4,5]), [4]);
});

it('correctly returns an array of the symmetric differences between two arrays', () => {
    assert.equal(diffArray.diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]);
});