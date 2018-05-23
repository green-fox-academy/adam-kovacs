/*Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()*/
'use strict'

export class Student {
  learn() { };

  question(teacher) {
    teacher.answer();
  }
}

export class Teacher {
  answer() { };
  teach(student) {
    student.learn();
  }
}