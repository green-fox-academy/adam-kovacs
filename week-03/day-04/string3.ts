// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.
'use strict'

function string3(str: string): string {
  if (str.lastIndexOf('*') === str.length - 2) {
    return str;
  } else if (str.length >= 40) {
    return;
  }  
  return string3(str.slice(0,str.lastIndexOf('*') + 2) + '*' + str.slice(str.lastIndexOf('*') + 2));
}

console.log(string3('foobar'));