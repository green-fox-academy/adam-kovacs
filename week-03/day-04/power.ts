// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
'use strict'

function powerN (n: number, a: number): number {
  if (a === 1) {
    return n;
  }
  return n * powerN(n, a-1);
}

console.log(powerN(2, 2));
