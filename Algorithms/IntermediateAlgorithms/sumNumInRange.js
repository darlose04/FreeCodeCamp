// Given an array of two numbers, return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
    let x = arr[0];
    let y = arr[1];
    let sum = 0;

    while (x <= y) {
        sum += x;
        x++;
    }

    return sum;
}

module.exports = {
    sumAll
}