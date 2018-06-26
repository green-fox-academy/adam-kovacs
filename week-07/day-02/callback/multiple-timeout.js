'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

let fruitArray = ['apple', 'pear', 'melon', 'grapes'];
let delay = 1000;

fruitArray.forEach((element, i) => {
  setTimeout(() => {
    console.log(fruitArray[i]);
  }, delay);
  delay += 1000;
})
