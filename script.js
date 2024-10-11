// task 1
console.log("task 1");
function addParamsToRequest(params) {
  let count = 1;
  return function (data) {
    count++;
    return {
      ...params,
      data,
      count,
    };
  };
}

const sendData = addParamsToRequest({ "access-token": "qwerty" });

const result = sendData({ field1: "value1", field2: "value2" });

console.log(result);

//task 2
console.log("task 2");
const obj = {
  getData: function () {
    console.log(`Person name is: ${this.name} and age ${this.age}`);
  },
};

const func = obj.getData.call({ name: "John", age: 30 });
//task 3
console.log("task 3");
const root = {
  name: "name",

  type: "folder",

  children: [
    {
      name: "folder 1",

      type: "folder",

      children: [
        {
          name: "folder 2",

          type: "folder",

          children: [
            {
              name: "file 3",

              type: "file",

              size: 30,
            },
          ],
        },
      ],
    },

    {
      name: "file 1",

      type: "file",

      size: 10,
    },

    {
      name: "file 2",

      type: "file",

      size: 20,
    },
  ],
};

let files = [];
function getFiles(root) {
  for (let key in root) {
    if (typeof root[key] === "object") {
      getFiles(root[key]);
    } else {
      if (root[key] === "file") {
        files.push(root.name);
      }
    }
  }

  return files;
}

let result3 = getFiles(root);

console.log(result3);

//task 4
console.log("task 4");
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

//task4_2
console.log("task 4_2");
function Person2(name, phone) {
  this.name = name;
  this.phone = phone;
}

Person2.prototype.introduce = function () {
  console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`);
};

function Student2(name, phone, course) {
  Person2.call(this, name, phone);
  this.course = course;
}

Student2.prototype = Object.create(Person2.prototype);
Student2.prototype.constructor = Student2;

Student2.prototype.study = function () {
  console.log(`Я навчаюся на ${this.course} курсі.`);
};

function Teacher2(name, phone, subject) {
  Person2.call(this, name, phone);
  this.subject = subject;
}

Teacher2.prototype = Object.create(Person2.prototype);
Teacher2.prototype.constructor = Teacher2;

Teacher2.prototype.teach = function () {
  console.log(`Я викладаю ${this.subject}.`);
};

let student2 = new Student2("Олексій", "0987654321", 2);
student2.introduce();
student2.study();

let teacher2 = new Teacher2("Марія", "0123456789", "Математика");
teacher2.introduce();
teacher2.teach();
