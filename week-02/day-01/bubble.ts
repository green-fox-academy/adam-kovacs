//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending
//  Example:
'use strict'
export { }

function bubble(arr, descend: boolean) {
  if (descend) {
    return arr.sort(function bigger(a, b) {
      return b - a;
    });
  } else {
    return (arr.sort(function smaller(a, b) {
      return a - b;
    }))
  }
}

console.log(bubble([34, 12, 24, 9, 5], false));
//  should print [5, 9, 12, 24, 34]
console.log(bubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

