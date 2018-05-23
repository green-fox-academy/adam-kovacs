/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies*/
'use strict'

import { Sharpie } from './sharpie';

class SharpieSet {
  private sharpies: Sharpie[];

  constructor() {
    this.sharpies = [];
  }

  public add(sharpie: Sharpie) {
    this.sharpies.push(sharpie);
  }

  public countUsable() {
    let usable: number = 0;
    this.sharpies.map(x => {
      if (x.inkAmount > 0) {
        usable++;
      }
    })
  }

  public removeTrash() {
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount <= 0) {
        this.sharpies.splice(i, 1);
      }
    }
  }
  
}