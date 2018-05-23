'use strict'
import { Animal } from './animal';

class Farm {
  private animals: Animal[];
  private slots: number;

  public breed(hunger, thirst) {
    if (this.slots > this.animals.length) {
      this.animals.push(new Animal(hunger, thirst));
    } else {
      console.log('Not enough slots.');
    }
  }

  public slaughter() {
    let currentIndexHunger: number[] = [0, this.animals[0].hunger];
    for (let i: number = 0; i < this.animals.length; i++) {
      if (currentIndexHunger[1] < this.animals[i].hunger) {
        currentIndexHunger = [i, this.animals[i].hunger];
      }
    }
    this.animals.splice(currentIndexHunger[0], 1);
  }
}