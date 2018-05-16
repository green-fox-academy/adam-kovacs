// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
'use strict'
export { }


function divide10(a: number) {
  if (a === 0) {
    throw 'fail';
  }
  return 10 / a;
}

try {
  console.log(divide10(0));
 } catch (e) {
  console.log(e);  
}