'use strict';

//Animal constructor function
function Animal() {
  this.hunger = 5;
  this.thirst = 5;

  this.eat = function () {
    this.hunger--;
  }

  this.drink = function () {
    this.thirst--;
  }

  this.play = function () {
    this.hunger++;
    this.thirst++;
  }
}

//Farm constructor function
function Farm() {
  this.slots = 0;
  this.animals = [];

  this.breed = function () { this.animals.push(new Animal) };

  this.slaughter = function () {
    this.animals
      .sort(function (a, b) { b.hunger - a.hunger })
      .pop();
  }

  this.report = function () {
    console.log(`The farm has ${this.animals.length} living animals, and we are ${this.getFarmState()}`);
  }

  this.callAnimalEvents = function () {
    this.animals.forEach(
      function (animal) {
        if (Math.floor(Math.random() * 2)) {
          animal.eat();
        }
        if (Math.floor(Math.random() * 2)) {
          animal.drink();
        }
        if (Math.floor(Math.random() * 2)) {
          animal.play();
        }
      });
  }

  this.getFarmState = function () {
    if (this.animals.length <= 0) {
      return 'bankrupt';
    } else if (this.animals.length >= this.slots) {
      return 'full';
    } else {
      return 'okay';
    }
  }

  this.progress = function () {
    this.callAnimalEvents();
    this.breed();
    this.slaughter();
    this.report();
  }
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);

for (let i = 0; i < 20; i++){
  SheepFarm.breed();
}

console.log(SheepFarm.animals); // Should log 20 Animal objects

const button = document.querySelector('button');

button.addEventListener('click', function(event) {
  SheepFarm.progress();
});