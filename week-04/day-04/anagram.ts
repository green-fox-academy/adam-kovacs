'use strict';

export let anagram = (str1?, str2?) => {
  try {
    return (str1.replace(/ /g, '').toLowerCase().split('').sort().join() === str2.replace(/ /g, '').toLowerCase().split('').sort().join());
  } catch {
    return false;
  }
}
