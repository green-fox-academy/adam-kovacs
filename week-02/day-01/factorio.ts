// -  Create a function called `factorio`
//    that returns it's input's factorial
'use strict'
export { }

function sum(limit: number) {
  let subSum: number = 1;
  for (let i: number = 1; i <= limit; i++) {
    subSum *= i;
    console.log(i);
  }
  return subSum;
}

console.log(sum(6));