// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
'use strict'

function numberAdder (n:number):number {
  if (n === 0) {
    return 0;
  } 
  return n + numberAdder(n-1)
}

console.log(numberAdder(3));
