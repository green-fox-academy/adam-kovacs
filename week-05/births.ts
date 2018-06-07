'use strict';

declare function require(path: string): any;
let fs = require('fs');
let charEncode = 'utf-8';

function countBirths(fileName: string) {
  let births = {};
  fs.readFileSync(fileName, charEncode).split('\r\n').forEach(element => {
    if (births[element.split(';')[1].slice(0, 4)]) {
      births[element.split(';')[1].slice(0, 4)]++;
    } else {
      births[element.split(';')[1].slice(0, 4)] = 1;
    }
  });
  return Object.keys(births).reduce((a, b) => births[a] > births[b] ? a : b);
}

console.log(countBirths('births.csv'));
