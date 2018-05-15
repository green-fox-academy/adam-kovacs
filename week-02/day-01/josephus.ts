'use strict'
export { }

//The Josephus-problem
//https://en.wikipedia.org/wiki/Josephus_problem

let posInit = 9;
let posNow: number = 1;
let maxPower: number = -1;

//Finding the smallest power of 2 above posInit
while (posNow >= 0) {
  posNow = posInit;
  maxPower++;
  posNow -= 2 ** maxPower;
}

//Final calculation and logging
console.log(`Winning position: ${
  (posInit - 2 ** (maxPower - 1)) * 2 + 1
}`);

