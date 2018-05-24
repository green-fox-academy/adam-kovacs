// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.
'use strict'

function string1(str: string): string {
  if (str.indexOf('x') === -1) {
    return str;
  }
  return string1(str.replace('x', 'y'));
}

console.log(string1('xoxoxoxo'));
