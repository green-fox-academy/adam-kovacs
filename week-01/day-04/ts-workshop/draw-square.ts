'use strict';
export{};


let lineCount: number = 12;

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

let sqr: string;

function topbottom () {
  let top: string = '';
  for (let i: number = 0; i <= lineCount - 1; i++) {
    top += '%';
  }
  console.log(top);
}

topbottom();

for (let i: number = 0; i <= lineCount - 3; i++) {
  sqr = '%';

  for (let j: number = 0; j < lineCount - 2; j++) {
    sqr += ' ';
  }
 
  sqr += '%';

  console.log(sqr);
}
topbottom();
