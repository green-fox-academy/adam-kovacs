'use strict';

export class Aircraft {
  private maxAmmo: number;
  private baseDmg: number;
  private ammo: number;
  private type: string;

  protected constructor(maxAmmo: number, baseDmg: number, type: string) {
    this.maxAmmo = maxAmmo;
    this.baseDmg = baseDmg;
    this.ammo = 0;
    this.type = type;
  }

  fight(): number {
    let dmg = this.ammo * this.baseDmg;
    this.ammo = 0;
    return dmg;
  }

  refill(rounds: number): number {
    while(this.ammo < this.maxAmmo && rounds > 0) {
      this.ammo++;
      rounds--;
    }
    return rounds;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDmg}, All Damage: ${this.ammo * this.baseDmg}`    
  }

  isPriority(): boolean {
    if (this instanceof F16) {
      return false;
    } else if (this instanceof F35) {
      return true;
    }
  }

  getAmmo(): number {
    return this.ammo;
  }

  getBaseDmg(): number {
    return this.baseDmg;
  }

  spendAmmo(): void {
    this.ammo = 0;
  }
}

export class F16 extends Aircraft{
  constructor() {
    super(8, 30, 'F16');
  }
}

export class F35 extends Aircraft{
  constructor() {
    super(12, 50, 'F35');
  }
}