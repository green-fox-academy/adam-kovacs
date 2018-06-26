'use strict';

const mapWith = (array, callback) => {
  let output = [];

  array.forEach(element => {
    output.push(callback(element));
  });

  return output;
}

const removeSecondLetter = (word) => {
  let newWord = '';
  for (let i = 0; i < word.length; i += 2) {
      newWord += (word[i]);
    }
  return newWord;
}

const addOne = (number) => {
  return number + 1;
}

const words = ['map', 'reduce', 'filter'];
console.log(mapWith([1, 2, 3], addOne));
console.log(mapWith(words, removeSecondLetter));