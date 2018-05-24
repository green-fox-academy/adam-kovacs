// Given a string, compute recursively a new string where all the 'x' chars have been removed.
'use strict'

function string2(str: string): string {
  if (str.indexOf('x') === -1) {
    return str;
  }
  return string2(str.replace('x', ''));
}

console.log(string2('xoxoxoxo'));