// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'
'use strict'
export { }

declare function require(path: string): any;
let fs = require('fs');


function writeName(filePath) {
  try {
    fs.writeFileSync(filePath, 'Kuvasz');
    console.log('Writing successful. Your name is finally safe.');
    return null;
  } catch (error) {
    console.log(`Unable to write file: ${filePath}`);
    
  }
}

writeName('my-file2.txt')