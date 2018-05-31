'use strict';

export let err = new Error('Invalid entry. Please enter a string.')
export let countLetters = (str?) => {
  let dic = {};
  try {
    if (typeof str === 'string') {
      for (let i: number = 0; i < str.length; i++) {
        if (typeof str[i] === 'string') {
          if (str[i] in dic) {
            dic[str[i]]++;
          } else {
            dic[str[i]] = 1;
          }
        } else {
          return err;
        }
      }
      return dic;}
      else {
        return err;
      }
  } catch {
    return err;
  }
}
