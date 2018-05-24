
// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
'use strict'

function bunny1 (n: number): number {
  if (n === 1) {
    return 2;
  }
  return 2 + bunny1(n -1);
}

console.log(bunny1(5));