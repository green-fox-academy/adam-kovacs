// Create a method that decrypts reversed-lines.txt
'use strict'
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncode: string = 'utf-8';

function reverseLines(filePath) {
  let rawData: string = fs.readFileSync(filePath) + '';
  let array = rawData.split('\r\n');
  let row = [];
  let newArray = [];
  for (let i: number = 0; i < array.length; i++) {
    row = array[i].split('');
    row = row.reverse();
    newArray.push(row.join(''));  
  }
  return newArray.join('\r\n');
}

console.log(reverseLines('reversed-lines.txt'));