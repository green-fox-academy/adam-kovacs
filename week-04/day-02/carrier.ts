'use strict';

import { Aircraft } from './aircrafts';
import { F16 } from './aircrafts';
import { F35 } from './aircrafts';

class Carrier {
  fleet: Aircraft[];
  ammoStore: number;
  health: number;

  constructor(ammoStore: number, health: number) {
    this.ammoStore = ammoStore;
    this.health = health;
    this.fleet = [];
  }

  add(aircraft: Aircraft): void {
    this.fleet.push(aircraft);
  }

  fill(): void {
    if (this.ammoStore > 0) {
      let listF16: Aircraft[] = [];
      let listF35: Aircraft[] = [];

      this.fleet.forEach(element => {
        if (element instanceof F16) {
          listF16.push(element)
        } else if (element instanceof F35) {
          listF35.push(element);
        }
      });

      for (let i: number = 0; i < listF35.length; i++) {
        if (this.ammoStore >= 12 - listF35[i].getAmmo()) {
          this.ammoStore = listF35[i].refill(this.ammoStore);
        } else return;
      }

      for (let i: number = 0; i < listF16.length; i++) {
        if (this.ammoStore >= 8 - listF16[i].getAmmo()) {
          this.ammoStore = listF16[i].refill(this.ammoStore);
        } else return;
      }

    } else {
      let err: Error = new Error('Ammo storage empty');
      console.log(err);
    }
  }

  changeHealth(x): void {
    this.health -= x;
  }

  fight(enemy: Carrier): void {
    let dmg: number = 0;
    this.fleet.forEach(element => {
      dmg += element.getAmmo() * element.getBaseDmg();
      element.spendAmmo();
    });
    enemy.changeHealth(dmg);
  }

  getStatus(): void {
    let dmg: number = 0;
    this.fleet.forEach(element => {
      dmg += element.getAmmo() * element.getBaseDmg();
    });
    console.log(`HP: ${this.health}, Aircraft count: ${this.fleet.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${dmg}`);
    console.log(`Aircrafts:`);
    this.fleet.forEach(element => {
      console.log(element.getStatus());
    });
  }
}

let c1: Carrier = new Carrier(3000, 10000);
for (let i: number = 0; i < 3; i++) {
  c1.add(new F16)
  c1.add(new F35)
}
c1.fill();

let c2: Carrier = new Carrier(4000, 9000);
for (let i: number = 0; i < 3; i++) {
  c2.add(new F16)
  c2.add(new F35)
}
c2.fill();

c1.getStatus();
c2.getStatus();