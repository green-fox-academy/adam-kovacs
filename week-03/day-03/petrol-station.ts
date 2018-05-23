'use strict'

export class Station {
  gasAmount: number;
  
  refill(car) {
    this.gasAmount -= (car.capacity - car.gasAmount);
    car.gasAmount = car.capacity;
  }
}

export class Car {
  capacity: number;
  gasAmount: number;

  constructor () {
    this.capacity = 100;
    this.gasAmount = 0;
  }
}
