'use strict'

export class Student {
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

  getAverage(): number {
    return this.grades.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    ) / this.grades.length;
  }

  addGrade(grade: number): void {
    this.grades.push(grade);
  }
}

let jozsi = new Student('Joskagyerek');
let god = new Student('God');
jozsi.addGrade(5);

console.log(jozsi.name, jozsi.grades);
console.log(god.name, god.grades);
console.log(god.getAverage());
