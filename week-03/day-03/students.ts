'use strict'

class Student {
  name: string;
  grades: number[];

  constructor(name: string) {
    this.name = name;
    if (name === 'God') {
      this.grades = [10, 10, 10];
    } else {
      this.grades = [];
    }
  }
}

let jozsi = new Student('Joskagyerek');
let god = new Student('God');
//jozsi.name = 'Jozsi';
//jozsi.grades = [1,2,3];
jozsi.grades.push(5);

console.log(jozsi.name, jozsi.grades);
console.log(god.name, god.grades);
