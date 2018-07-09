'use strict';

let car = {
  petrolLevel: 0,
  petrolCapacity: 50,
  refill: function(amount) {
    if (this.petrolLevel + amount >= this.petrolCapacity) {
      let gasConsumed = this.petrolCapacity - this.petrolLevel;
      this.petrolLevel = this.petrolCapacity;
      return gasConsumed;
    } else {
      this.petrolLevel += amount;
      return amount;
    }
  }
}

let station = {
  petrolStorage: 3000,
  provide: function(car) {
    this.petrolStorage -= car.refill(this.petrolStorage);
  }
}


console.log(car.petrolLevel);
console.log(station.petrolStorage);

station.provide(car);

console.log(car.petrolLevel);
console.log(station.petrolStorage);