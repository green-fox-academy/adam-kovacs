'use strict';

export class Summer {
  arr: number[];
  invalidEntry = Error('Could not complete request: Input is not a list of numbers.');

  constructor(arr) {
    this.arr = arr;
  }

  sum() {
    try {
      let sumInt: number = 0;
      this.arr.forEach(element => {
        sumInt += element
      });
      return sumInt;
    } catch {
      return this.invalidEntry;
    }
  }
}

