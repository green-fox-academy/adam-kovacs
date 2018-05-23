//WAR APP
'use strict'

import {Armada} from './armadaclass'

class WarApp {
  private armada1: Armada;
  private armada2: Armada;

  constructor(armadaSize = 10, shipSizes = 20) {
    this.armada1 = new Armada(armadaSize, shipSizes);
    this.armada2 = new Armada(armadaSize, shipSizes);
  }

  start(): void {
    this.armada1.fillArmada();
    this.armada2.fillArmada();
    console.log(this.armada1.war(this.armada2));
  }
}

let war = new WarApp();
war.start()