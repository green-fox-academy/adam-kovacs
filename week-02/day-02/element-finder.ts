'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

function containsSeven (arr) {
  if (arr.indexOf(7) != - 1) {
    return 'Hoorray';    
  } else {
    return 'Noooooo';    
  }
}


const numbers: number[] = [1, 2, 3, 4, 5, 6, 8,];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;