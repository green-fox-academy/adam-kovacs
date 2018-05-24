// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
'use strict'

function sumDigit (n: number): number {
  if (n === 0){
    return 0;
  }
  console.log(n);
  
  return n % 10 + (sumDigit(Math.floor(n / 10)));
}

console.log(sumDigit(666));
