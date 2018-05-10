'use strict';
export{};


let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let topbottom: string = '%%%%%';

console.log(topbottom);

for (let i: number = 0; i <= lineCount - 3; i++) {
  console.log('%   %');
}

console.log(topbottom);
