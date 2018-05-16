// Create a method that decrypts reversed-order.txt
'use strict'
export{}

declare function require(path: string): any;
let fs = require('fs');
let charEncode: string = 'utf-8';

function reverseOrder(filePath) {
  let rawData: string = fs.readFileSync(filePath) + '';
  let array = rawData.split('\r\n');
  let newArray = array.reverse();
  return newArray.join('\r\n');
}
console.log(reverseOrder('reversed-order.txt'));