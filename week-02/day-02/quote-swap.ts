'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

function quoteSwap(arr) {
  let temp: string = '';
  temp = arr[2];
  arr[2] = arr[5]; 
  arr[5] = temp;
  temp = `"${arr.join(' ')}"`;
  return temp;
}

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;