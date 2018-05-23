//ARMADA CLASS
'use strict'

import {Ship} from './shipclass'

export class Armada {
  fleet: Ship[];
  private shipSizes: number;
  private armadaSize: number;

  constructor(armadaSize = 10, shipSizes = 20) {
    this.fleet = [];
    this.shipSizes = shipSizes;
    this.armadaSize = armadaSize;
  }

  war(enemyArmada): boolean {
    let shipCount: number = 0;
    let enemyCount: number = 0;

    while (true) {
      let isWon = this.fleet[shipCount].battle(enemyArmada.fleet[enemyCount]);
      if (isWon) {
        enemyCount++;
      } else {
        shipCount++;
      }
      if (enemyCount >= enemyArmada.fleet.length) {
        return true;
      }
      if (shipCount >= this.fleet.length) {
        return false;
      }
    }
  }

  fillArmada(): void {
    for (let i: number = 0; i < this.armadaSize; i++) {
      this.fleet.push(new Ship(this.shipSizes));
      this.fleet[i].fillShip();
    }
  }
}