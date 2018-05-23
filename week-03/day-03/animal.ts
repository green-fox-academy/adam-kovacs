'use strict'

class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger = 50, thirst = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.thirst++;
    this.hunger++;
  }
}

export { Animal }