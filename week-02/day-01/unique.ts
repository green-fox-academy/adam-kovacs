//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
'use strict'
export { }

let lastIndex, firstIndex: number;

function unique(arr) {
  arr.forEach(element => {
    lastIndex = -1;
    while (true) {
      lastIndex = arr.indexOf(element);
      firstIndex = arr.lastIndexOf(element);

      if (lastIndex === firstIndex) {
        break;
      } else {
        arr.splice(firstIndex, 1);
      }
    }
  });
  return arr;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34, 34, 34, 11]))
//  should print: `[1, 11, 34, 52, 61]`
// and it does ;)