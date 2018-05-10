'use strict'
export{};

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let drw: string = '';

for (let i: number = 0; i < 8; i++) {
  drw = '';

  for(let j: number = 0; j < 4; j++) {
    if (i % 2 == 0) {
      drw += '% ';
    }
      else {
        drw += ' %';
      }
  }

  console.log(drw);
}