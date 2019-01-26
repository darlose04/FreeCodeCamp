// Given an array of two numbers, return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

// time of this method is 0.081 ms
// function sumAll(arr) {
//     let x = arr[0];
//     let y = arr[1];
//     let sum = 0;

//     if (x < y) {
//         while (x <= y) {
//             sum += x;
//             x++;
//         }
//     } else {
//         while (x >= y) {
//             sum += x;
//             x--;
//         }
//     }

//     return sum;
// }

// time of this method is 0.081 ms
// function sumAll(arr) {
//     let max = Math.max(arr[0], arr[1]);
//     let min = Math.min(arr[0], arr[1]);
//     let temp = 0;
//     for (let i = min; i <= max; i++) {
//         temp += i;
//     }

//     return temp;
// }

// time of this method is 0.435 ms
// function sumAll(arr) {
//     let sortedArr = arr.sort((a,b) => a-b);
//     let firstNum = arr[0];
//     let lastNum = arr[1];

//     let sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
//     return sum;
// }

// time of this method is 0.076 ms
function sumAll(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}


// module.exports = {
//     sumAll
// }

console.time('sumAll');

sumAll([5,10]);

console.timeEnd('sumAll');