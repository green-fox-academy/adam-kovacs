// Write a recursive function that takes one parameter: n and counts down from n.
'use strict'
export { }

function counter(n: number): number {
  if (n === 0) {
    return 0;
  }
  console.log(n);
  return counter(n - 1);
}

console.log(counter(10));
