'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let stars: string = '';
for (let i: number = 1; i <= lineCount; ++i) {
  
  for (let j: number = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
  stars = '';
}