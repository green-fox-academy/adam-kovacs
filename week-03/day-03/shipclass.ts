//SHIP CLASS
'use strict'

import {Pirate} from './pirate'

export class Ship {
  private crew: Pirate[];
  private shipSize: number;

  constructor(shipSize) {
    this.shipSize = shipSize;
    this.crew = [];
  }

  fillShip(): void {
    this.crew.push(new Pirate(true));
    let random = Math.random() * this.shipSize;
    for (let i: number = 0; i < random; i++) {
      this.crew.push(new Pirate(false));
    }
  }

  getAlive(): number {
    let crewAlive: number = 0;
    for (let i: number = 1; i < this.crew.length; i++) {
      if (this.crew[i].getStatus() === 'alive') {
        crewAlive++;
      }
    }
    return crewAlive;
  }

  showInfo(): void {
    let capRumDrunk: number = this.crew[0].getRumDrunk();
    let capStatus: string = this.crew[0].getStatus();
    let crewAlive: number = this.getAlive()
    console.log(`_______________________\r\nCaptain info:\r\nRum drunk: ${capRumDrunk} Status: ${capStatus}\r\n\r\nShip info:\r\nNumber of alive pirates: ${crewAlive}\r\n_______________________\r\n`);
  }

  party(): void {
    let rum = Math.random() * this.crew.length;
    for (let i: number = 0; i < rum; i++) {
      let pirateIndex = Math.floor(Math.random() * this.crew.length);
      this.crew[pirateIndex].drinkSomeRum();
    }
  }

  loss(): void {
    let losses = Math.random() * this.crew.length;
    for (let i: number = 0; i < losses; i++) {
      let pirateIndex = Math.floor(Math.random() * this.crew.length);
      this.crew[pirateIndex].die();
    }
  }

  battle(enemyShip): boolean {
    let friendlyScore: number = this.getAlive() - this.crew[0].getRumDrunk();
    let enemyScore: number = enemyShip.getAlive() - enemyShip.crew[0].getRumDrunk();

    if (friendlyScore >= enemyScore) {
      this.party();
      enemyShip.loss();
      return true;
    } else {
      enemyShip.party();
      this.loss();
      return false;
    }
  }
}