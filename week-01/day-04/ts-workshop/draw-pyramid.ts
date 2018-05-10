'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
export {}

let pyr: string = '';
for (let i: number = 0; i <= lineCount - 1; ++i) {

  for (let j: number = 0; j <= lineCount - i; j++) {
    pyr += ' ';
  }

  pyr += '*'
  for (let k: number = 1; k <= i; k++) {
    pyr += '**';
  }

  console.log(pyr);
  pyr ='';
}