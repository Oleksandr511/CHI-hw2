class Person {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  introduce() {
    console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
  }
}

class Student extends Person {
  constructor(course, name, phone) {
    super(name, phone);
    this.course = course;
  }
  study() {
    console.log(`Я навчаюся на ${this.course} курсі`);
  }
}

class Teacher extends Person {
  constructor(subject, name, phone) {
    super(name, phone);
    this.subject = subject;
  }
  teach() {
    console.log(`Я викладаю ${this.subject}`);
  }
}

const student = new Student(2, "John", "123-45-67");
student.introduce();
student.study();

const teacher = new Teacher("Math", "Kai", "189-23-17");
teacher.introduce();
teacher.teach();
