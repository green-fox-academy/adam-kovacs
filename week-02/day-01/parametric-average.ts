'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let myNums = [23, 43, 54, 64, 23, 96, 23, 52];

let sum = myNums.reduce(function (a, b) {return a + b;});

console.log(`Sum: ${sum}, Average: ${sum / (myNums.length - 1)}`);