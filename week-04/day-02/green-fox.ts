'use strict'

class Person {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected goal: string;
  protected introduction: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.introduction = `Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}`;
    this.goal = 'Live in the moment!'
  }

  introduce(): void {
    console.log(this.introduction);
  }

  getGoal(): void {
    console.log(`My goal is: ${this.goal}`);
  }
}

class Student extends Person {
  private previousOrganization: string;
  private skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
    this.introduction = `Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization}, who skipped ${this.skippedDays} from the course already.`;
    this.goal = 'Be a junior software developer.'
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {
  private level: string;

  constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
    super(name, age, gender)
    this.level = level;
    this.introduction = `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`
    this.goal = 'Educate brilliant junior software developers.'
  }
}

class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company: string = 'Google') {
    super(name, age, gender)
    this.company = company;
    this.hiredStudents = 0;
    this.introduction = `Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`;
    this.goal = 'Hire brilliant junior software developers!';
  }

  hire(): void {
    this.hiredStudents++;
  }
}

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}



let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();