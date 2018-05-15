'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

function makingMatches (gurlz, boyoz) {
  let theyAreLess, newArr = [];

  if (gurlz.length <= boyoz.length) {
    theyAreLess = gurlz;
  } else {
    theyAreLess = boyoz;
  }
  
 for (let i: number = 0; i < theyAreLess.length; i++) {
  newArr.push(gurlz[i], boyoz[i]);
 }
 return newArr;
}


let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];
//Poor Jeff...

console.log(makingMatches(girls, boys));

export = makingMatches;