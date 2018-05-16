// Create a method that decrypts duplicated-chars.txt
'use strict'
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncode = 'utf-8';

function decodeDoubled(filePath) {
  let rawData = fs.readFileSync(filePath) + '';
  let array = rawData.split('');
  for (let i: number = 0; i < array.length; i++) {
    if (i / 2 != 0)  {
      array.splice(i, 1);
    }
  }
  let out = array.join('');
  return out;
}

console.log(decodeDoubled('duplicated-chars.txt'));