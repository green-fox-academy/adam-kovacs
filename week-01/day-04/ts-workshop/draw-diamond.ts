'use strict';
export {};

let lineCount: number = 10;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let star, spaces: number;
let diamond: string;

for (let i : number = 0; i < lineCount; ++i) {
  diamond = '';
  spaces = Math.abs(Math.floor(lineCount / 2) - i);
  star = lineCount - spaces * 2;

  for (let j: number = 1; j <= spaces; j++) {
    diamond += ' ';
  }

  for (let j: number = 1; j <= star; j++) {
    diamond += '*';
  }

  console.log(diamond);
  
}
