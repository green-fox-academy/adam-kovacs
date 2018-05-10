'use strict';
export { };

let lineCount: number = 24;

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

for (let i: number = 0; i < lineCount; ++i) {
  diamond = '';
  spaces = Math.abs(Math.floor(lineCount / 2) - i);

  if (lineCount % 2 == 1) {
    star = lineCount - spaces * 2;
  } else {
    star = lineCount - spaces * 2 - 1;
  }

  for (let j: number = 1; j <= spaces; j++) {
    diamond += ' ';
  }

  for (let j: number = 1; j <= star; j++) {
    diamond += '*';
  }

  console.log(diamond);

  if (lineCount % 2 == 0 && i == lineCount / 2) {
    console.log(diamond);
  }
}
