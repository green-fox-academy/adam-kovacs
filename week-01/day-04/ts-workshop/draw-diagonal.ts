'use strict';
export{};


let lineCount: number = 10;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is


let index: number;
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
  index = 2;

  for (let j: number = 0; j < i; j++) {
    sqr += ' ';
    index += 1;
  }

    sqr += '%';
    index += 1;
  
  for (let k: number = 0; k < (lineCount - index); ++k) {
    sqr += ' ';
  }


  sqr += '%';

  console.log(sqr);
}
topbottom();