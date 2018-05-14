// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
'use strict'
export{}



function sum(limit: number) {
  let subSum: number = 0;
  for (let i: number = 1; i <= limit; i++) {
    subSum = subSum + i;
    console.log(i);
    console.log(subSum);
    
  }
  return subSum;
}

console.log(sum(6));