// Create a method that decrypts encoded-lines.txt
'use strict'
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncode: string = 'utf-8';

function decode(filePath) {
  let rawData: string = fs.readFileSync(filePath, charEncode) + '';
  let temp: any;
  let out: string = '';
  for (let i: number = 0; i < rawData.length; i++) {
    if (rawData.charAt(i) === " ") {
      out += ' ';
    } else {
    temp = rawData.charCodeAt(i);
    temp--;
    temp = String.fromCharCode(temp);
    out += temp;
    }
  }
return out;
}

console.log(decode('encoded-lines.txt'));