// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
'use strict'
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readMatrix(filePath) {
  let matrix = [];
  let row = [];
  let temp = fs.readFileSync(filePath) + '';
  let rawData = temp.split('\r\n');
  rawData.forEach(element => {
    row = [];
    for (let i: number = 0; i < element.length; i++) {
      row.push(element.charAt(i));
    }
    matrix.push(row);
  });
  return matrix;
}

function checkPairs(matrix) {
  let checkSum = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix.length; j++) {
      if (!(matrix[i][j] == matrix[i][j + 1])) {
        break;
      } else {      
        checkSum++;       
      }
      if (checkSum >= matrix.length - 1) {      
        return matrix[i][j];
      }
    }
    checkSum = 0;
  } 
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix.length; j++) {    
      if (!(matrix[i][j] == matrix[i + 1][j])) {
        break;
      } else {        
        checkSum++;     
        console.log(checkSum + 'col' + ' ' + i, j);
      } 
      if (checkSum >= matrix.length - 1) {
        return matrix[j][i];
      }
    }
    checkSum = 0;
  } 
  return 'draw';
}

function ticTacResult (filePath) {
  return checkPairs(readMatrix(filePath));
}

//console.log(ticTacResult('win-o.txt'))
// should print O
//console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw