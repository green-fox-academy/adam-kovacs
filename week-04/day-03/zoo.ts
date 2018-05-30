'use strict'

abstract class Animal {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getName(): string {
    return this.name;
  }

  abstract breed(partner: Animal): string;
}

class Bird extends Animal {
  private wingLength: number;

  constructor(name: string, age: number, gender: string, wingLength: number) {
    super(name, age, gender)
    this.wingLength = wingLength;
  }

  breed(): string {
    return 'by dropping fertilised eggos.'
  }
}

class Reptile extends Animal {
  private isLiveBreeder: boolean;

  constructor(name: string, age: number, gender: string, isLiveBreeder: boolean) {
    super(name, age, gender)
    this.isLiveBreeder = isLiveBreeder;
  }

  breed(): string {
    if (this.isLiveBreeder) {
      return 'by pushing small ones to this horrible world.'
    } else {
      return 'by dropping fertilised eggos.'
    }

  }
}

class Mammal extends Animal {
  private isLiveBreeder: boolean;

  constructor(name: string, age: number, gender: string, isLiveBreeder: boolean) {
    super(name, age, gender)
    this.isLiveBreeder = isLiveBreeder;
  }

  breed(): string {
    if (this.isLiveBreeder) {
      return 'by pushing small ones to this horrible world.'
    } else {
      return 'by dropping fertilised eggos.'
    }

  }
}

let reptile = new Reptile('Crocodile', 4, 'L', false);
let mammal = new Mammal('Koala', 12, 'G', true);
let bird = new Bird('Parrot', 3, 'B', 18);

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());