// CODE here for your Lambda Classes

// Person

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
  }
}

// Example Person classes

const isabella = new Person({
  name: 'Isabella Gonzalez',
  location: 'New York',
  age: 18
});

const andrea = new Person({
  name: 'Andrea Garcia',
  location: "Bronx",
  age: 35
});

// Instructor

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today, we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`)
  }

  randomSub(student) {
    let min = Math.ceil(1);
    let max = Math.floor(student.grade - 1);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    let totalGrade = student.grade - randomNum;
    console.log(`${student.name} started with ${student.grade} points.`);
    console.log(`${this.name} has subtracted ${randomNum} points away from ${student.name}.`);
    console.log(`Currently, ${student.name} has ${totalGrade} points.`);
    student.grade = totalGrade;
  }

  randomAdd(student) {
    let min = Math.ceil(1);
    let max = Math.floor(100);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    let totalGrade = student.grade + randomNum;
    console.log(`${student.name} started with ${student.grade} points.`);
    console.log(`${this.name} has added ${randomNum} points to ${student.name}'s grade.`);
    console.log(`Currently, ${student.name} has ${totalGrade} points.`);
    student.grade = totalGrade;
  }
}

// Example Instructor classes

const maria = new Instructor({
  name: "Maria Scott",
  location: "New Jersey",
  age: 28,
  specialty: "html",
  favLanguage: "English",
  catchPhrase: "How you doin?"
});

const tony = new Instructor({
  name: "Tony Montana",
  location: "Miami",
  age: 35,
  specialty: "python",
  favLanguage: "Spanglish",
  catchPhrase: "Say hello to my little friend!"
});

// Student

class Student extends Person {
  constructor(attr) {
  super(attr);
  this.previousBackground = attr.previousBackground;
  this.className = attr.className;
  this.favSubjects = attr.favSubjects; //array
  this.grade = attr.grade;
  }
  listsSubjects() {
    console.log(`\n`,`These are ${this.name}'s favorite subjects.`, `\n`);
    this.favSubjects.forEach((item) => {
      console.log(`- ${item}`);
    });
  }
  prAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

// Example Student classes
const john = new Student({
  name: "John Lennon",
  location: "Liverpool",
  age: 30,
  previousBackground: "singer",
  className: "CS132",
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  grade: 100
});

const paul = new Student({
  name: "Paul McCartney",
  location: "Liverpool",
  age: 34,
  previousBackground: "singer",
  className: "CS132",
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  grade: 99
});


// Project Manager

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

// Example Project Manager classes

const joe = new ProjectManager({
  name: "Joe Pesci",
  location: "Las Vegas",
  age: 35,
  specialty: "Java",
  favLanguage: "Italian",
  catchPhrase: "You talkin' to me?",
  gradClassName: "CS1",
  favInstructor: "Sean"
});

const robert = new ProjectManager({
  name: "Robert De Niro",
  location: "Chicago",
  age: 35,
  specialty: "SQL",
  favLanguage: "English",
  catchPhrase: "",
  gradClassName: "CS1",
  favInstructor: "Sean"
});

// Person class tests
console.log("Test for Person class", `\n`);

isabella.speak();
andrea.speak();

// Instructor class tests
console.log(`\n`, "Test for Instructor class", `\n`);

maria.demo("CSS");
tony.grade(john, "CSS");

// Student class tests
console.log(`\n`, "Test for Student class", `\n`);

john.prAssignment("html");
paul.sprintChallenge("CSS");
paul.listsSubjects();

// Project Manager tests
console.log(`\n`, "Test for Project Manager class", `\n`);

joe.standUp("@webpt192");
robert.debugsCode(john, 'CSS');

// Stretch Challenge Test
console.log(`\n`, "Test for Stretch Challenge");

console.log(`\n`, "Random Sub", `\n`);
maria.randomSub(paul);

console.log(`\n`, "Random Add", `\n`);
maria.randomAdd(john);

console.log(`\n`, "Random Sub with Project Manager", `\n`);
joe.randomSub(paul);