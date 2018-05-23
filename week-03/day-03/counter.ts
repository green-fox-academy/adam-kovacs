/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/
'use strict'

export class Counter {
  integer: number;
  integerInitial: number;

  constructor (integer = 0) {
  this.integer = integer;
  this.integerInitial = integer;
  }

  add(number = 1) {
    this.integer += Math.round(number);
  }

  get():string {
    return `${this.integer}`;
  }

  reset() {
    this.integer = this.integerInitial;
  }
}