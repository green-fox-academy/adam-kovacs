
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console
'use strict'
export { }

let ai = [3, 4, 5, 6, 7];
let sum: number;

console.log(ai.reduce(function(a, b) {return a + b }));
