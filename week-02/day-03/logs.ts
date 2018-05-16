// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
'use strict'
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncode = 'utf-8';

function readLogs(filePath) {
  let rawData = fs.readFileSync(filePath) + '';
  let logArray = rawData.split('\r\n');
  return logArray;
}

function uniqueIP(logArray) {
  let firstIndex: number;
  let lastIndex: number;
  let newArray = [];
  for (let i: number = 0; i < logArray.length; i++) {
    console.log(logArray[i].slice(27, 38));
    lastIndex = -1;
    while (true) {
      lastIndex = logArray.indexOf(logArray[i]);
      firstIndex = logArray.lastIndexOf(logArray[i]);
      if (lastIndex === firstIndex) {
        newArray.push(logArray[i].slice(27, 38));
        break;
      } else {
        logArray.splice(lastIndex, 1);
      }
    }
  }
  return newArray;
}

function getPostRatio(logArray) {
  let post: number = 0;
  let get: number = 0;
  for (let i: number = 0; i < logArray.length; i++) { 
    if (logArray[i].slice(41, 45) == 'POST') {
      post++;      
    } else if (logArray[i].slice(41, 44) == 'GET') {
      get++;
    } else { }
  }
  return (get / post);
}

console.log(uniqueIP(readLogs('logs.txt')));
console.log(getPostRatio(readLogs('logs.txt')))