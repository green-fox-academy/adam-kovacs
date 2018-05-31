'use strict';

export let err = new Error('Invalid entry.')

export function add(a?, b?): (number | Error) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return err;
  }
}

export function maxOfThree(a?, b?, c?): (number | Error) {
  try {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
      let arr: number[] = [a, b, c];
      return Math.max(a, b, c);
    } else {
      return err;
    }
  } catch {
    return err;
  }
};

export function median(pool?): (number | Error) {
  if (!Array.isArray(pool)) {
    return err;
  }
  pool.forEach(element => {
    console.log('enter loop');
    
    if (typeof element !== 'number' || element === NaN) {
      return err;
    }
  });
  return pool[Math.ceil((pool.sort().length - 1) / 2)];
}

export function isVowel(c: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].indexOf(c) !== -1;
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}