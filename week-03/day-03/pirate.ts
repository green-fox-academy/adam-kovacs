//PIRATE CLASS
'use strict'

export class Pirate {
  private rumDrank: number;
  private status: string;
  private isCaptain: boolean;

  constructor(isCaptain) {
    this.isCaptain = isCaptain;
    this.rumDrank = 0;
    this.status = 'alive';
  }

  drinkSomeRum(): void {
    if (this.status === 'alive') {
      this.rumDrank++;
    } else if (this.status === 'drunk') {
      console.log('He\s passed out, mate...');
    } else {
      console.log('He\'s dead, mate...');
    }
  }

  die(): void {
    this.status = 'dead';
  }

  howsItGoingMate(): void {
    if (this.rumDrank <= 4 && this.status === 'alive') {
      console.log('Pour me anudder!');
    } else if (this.status === 'dead') {
      console.log('He\'s dead, mate...');
    } else if (this.status === 'drunk') {
      console.log('He\s passed out, mate...');
    } else {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      this.status = 'drunk';
    }
  }

  brawl(enemy: Pirate): void {
    if (enemy.status === 'alive' && this.status === 'alive') {
      let result = Math.random() * 3;
      if (result >= 2) {
        enemy.status = 'dead';
      } else if (result >= 1) {
        this.status = 'drunk';
        enemy.status = 'drunk';
      } else {
        this.status = 'dead';
      }
    } else {
      console.log('You can\'t fight a dead man');
    }
  }

  parrot(): void {
    console.log('Baaaad parrott');
  }
  getRumDrunk(): number {
    return this.rumDrank;
  }
  getStatus(): string {
    return this.status;
  }
  getIsCaptain(): boolean {
    return this.isCaptain;
  }
}
