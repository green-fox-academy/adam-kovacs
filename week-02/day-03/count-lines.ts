// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict'
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function countLines(filePath: string) {
  try {
    let text = fs.readFileSync(filePath, charEncoding);
    let count: number = 0;
    text.split('\n').forEach(element => {
      count++
    });
    console.log(count);
    return null;
  } catch (error) {
    console.log(0);
    return null;
  }
}

countLines('my-file.txt');