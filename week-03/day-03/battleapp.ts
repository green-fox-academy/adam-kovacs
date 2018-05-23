//BATTLE APP
'use strict'

import {Ship} from './shipclass'

class BattleApp {
  private ship1: Ship;
  private ship2: Ship;

  constructor(shipSize1 = 20, shipSize2 = 20) {
    this.ship1 = new Ship(shipSize1);
    this.ship2 = new Ship(shipSize2);
  }

  start(): void {
    this.ship1.fillShip();
    this.ship2.fillShip();
    console.log(this.ship1.battle(this.ship2));
  }
}

let battle = new BattleApp();
battle.start()