'use strict';
export { };

let lineCount: number = 20;

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

let lc: number = 9;
let dia: string = '';

for (let i: number = 0; i < lc; i++) {
  dia = '';
  for (let j: number = 1; j < lc + 1; j++) {
    if (j >= Math.abs(Math.ceil(lc / 2) - i) && j <= Math.ceil(lc / 2) + i) {
      dia
        += '*';
    } else {
      dia += ' ';
    }
  }

  console.log(dia);
  /*if (lc % 2 === 0 && i === (lc / 2) + 1) {
    console.log(dia);
  }*/
}
