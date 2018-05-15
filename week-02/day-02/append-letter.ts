'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

function appendA (arr) {
  let newArr = [];
  arr.forEach(element => {
    element += ('a');
    newArr.push(element);    
  });
return newArr;
}



let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;