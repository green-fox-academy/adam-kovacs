'use strict'

export let err = new Error('Invalid input. Please enter an integer.')

export function fibonacci(n?) {
  if (typeof n === 'number' && n % 1 === 0 && n > 0) {
    if (n === 1) {
      return 0;
    } else if (n === 2) {
      return 1 + fibonacci(n - 1);
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  } else {
    return err;
  }
}