'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

function checkNums (listOfNumbers) {
  let lookingFor = [4, 8, 12, 16];

  for (let i: number = 0; i < lookingFor.length; i++) {
    if (!listOfNumbers.includes(lookingFor[i])) {    
      return false; 
    };
  };
  return true;
}


let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));

export = checkNums;