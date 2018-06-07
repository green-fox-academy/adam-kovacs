'use strict';

declare function require(path: string): any;
let fs = require('fs');
let charEncode = 'utf-8';

function countBirths(fileName: string) {
  let births = {};
  fs.readFileSync(fileName, charEncode).split('\r\n').forEach(element => {
    element = element.split(';')[1].slice(0, 4);    
    if (births[element]) {
      births[element]++;
    } else {
      births[element] = 1;
    }
  });
  console.log(births);
  
  return Object.keys(births).reduceRight((a, b) => births[a] > births[b] ? a : b);
}

console.log(countBirths('births.csv'));
