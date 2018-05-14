// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
'use strict'
export { }

//Built-in method
let numList = [3, 4, 5, 6, 7];
console.log(numList.reverse());

//Roundabout method
numList = [3, 4, 5, 6, 7];
let temp = [];

for (let i: number = 0; i <= numList.length - 1; i++) {
  temp.push(numList[numList.length - 1 - i])
}
numList = temp;
console.log(numList);
