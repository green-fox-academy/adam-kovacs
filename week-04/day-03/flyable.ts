'use strict';
console.log('nuigger');

import { Animal } from './zoo'
console.log('yo');

abstract class Flyable {

  constructor() { }
  abstract land();
  abstract fly();
  abstract takeOff();
}

abstract class Vehicle {
  private fuelAmount: number;
  private acceleration: number;
  private color: string;

  constructor(fuelAmount: number, accelaration: number, color: string) {
    this.fuelAmount = fuelAmount;
    this.acceleration = accelaration;
    this.color = color;
  }
}

class Helicopter extends Vehicle implements Flyable {

  constructor(fuelAmount: number, accelaration: number, color: string) {
    super(fuelAmount, accelaration, color);
  }

  land() {
    console.log('Landing succesful');
  }

  fly() {
    console.log('Increasing altitude');
  }

  takeOff() {
    console.log('Spinning up rotors');

  }
}

class Bird extends Animal implements Flyable {
  
  private wingLength: number;

  constructor(name: string, age: number, gender: string, wingLength: number) {
    super(name, age, gender)
    this.wingLength = wingLength;
  }

  breed(): string {
    return 'by dropping fertilised eggos.'
  }
  
  land() {
    console.log('Be careful Vili!');
  }

  fly() {
    console.log('Like a free bird');
  }

  takeOff() {
    console.log('Reach for the skies');    
  }
}

let birdo: Bird = new Bird('Vili a veréb', 9, 'B', 12);
birdo.fly();
console.log(birdo.getName());