'use strict';

let volvo = {
  type: "Volvo",
  fuel: 23,
  consumption: 0.06,
  kms: 43000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};

let ferrari = {
  type: "Ferrari",
  fuel: 0,
  consumption: 0.12,
  kms: 9000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};

function refuel(liters) {
  this.fuel += liters
}

let tesla = {
  type: '',
  battery: 500,
  kms: 0,
  consumption: 6,
  ride: function (km) {
    this.kms += km;
    this.battery -= km * this.consumption;
  }
}

volvo.ride(42);

let refuelFerrari = refuel.bind(ferrari);
refuelFerrari(52);

tesla.ride(36);
console.log(tesla.kms);
console.log(tesla.battery);