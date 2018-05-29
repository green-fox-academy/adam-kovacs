'use strict';

import { Flower } from './plants';
import { Tree } from './plants';

class Garden {
  private plants: (Flower | Tree)[];

  constructor() {
    this.plants = [];
  }

  addFlower(color: string): void {
    this.plants.push(new Flower(color));
  }

  addTree(color: string): void {
    this.plants.push(new Tree(color));
  }

  water(gallon: number): void {
    console.log(`Watering with ${gallon}`);
    let toWater: number[] = [];
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].getNeedWater()) {
        toWater.push(i);        
      }
    }
    for (let i: number = 0; i < toWater.length; i++) {
      this.plants[toWater[i]].water(gallon / toWater.length)
    }
    this.info();
  }

  info(): void {
    for (let i: number = 0; i < this.plants.length; i++) {
      let needPrint: string;

      if (this.plants[i].getNeedWater()){        
        needPrint = 'needs';
      } else {
        needPrint = 'doesn\'t need';
      }
      console.log(`The ${this.plants[i].getColor()} ${this.plants[i].getPlantType()} ${needPrint} water`);      
    }
    console.log(`\r\n`);
  }
}

let yard: Garden = new Garden;
yard.addFlower('yellow');
yard.addFlower('blue');
yard.addTree('purple');
yard.addTree('orange');

yard.info();
yard.water(40);
yard.water(70);