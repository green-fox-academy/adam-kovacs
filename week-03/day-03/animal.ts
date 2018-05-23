'use strict'

export class Animal {
  hunger: number = 50;
  thirst: number = 50;

  eat () {
    this.hunger--;
  }

  drink () {
    this.thirst--;
  }

  play () {
    this.thirst++;
    this.hunger++;
  }
}