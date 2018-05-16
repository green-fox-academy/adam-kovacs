// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use strict'
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function copyFile(filePath1, filePath2) {
  try {
    let temp = fs.readFileSync(filePath1, charEncoding);
    fs.writeFileSync(filePath2, temp);
    return true;
  } catch (error) {
    return false;
  }
}

console.log(`File copy successful: ${copyFile('my-file3.txt', 'my-file4.txt')}`);