/* 
 * Filename: sophisticated_code.js
 * Description: A sophisticated and complex JavaScript code.
 */

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a student, inheriting from Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for an exam.`);
  }
}

// Class representing a teacher, inheriting from Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

// Creating objects
const john = new Person("John", 25);
const jane = new Student("Jane", 20, "A+");
const mrSmith = new Teacher("Mr. Smith", 40, "Math");

john.sayHello();    // Output: Hello, my name is John and I am 25 years old.
jane.sayHello();    // Output: Hello, my name is Jane and I am 20 years old.
jane.study();       // Output: Jane is studying for an exam.
mrSmith.sayHello(); // Output: Hello, my name is Mr. Smith and I am 40 years old.
mrSmith.teach();    // Output: Mr. Smith is teaching Math.

// Function to calculate the factorial of a number using recursion
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  else
    return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120

// Example of asynchronous code using setTimeout
function delayedGreeting() {
  setTimeout(() => {
    console.log("Greetings after a delay!");
  }, 2000);
}

delayedGreeting(); // Output (after 2 seconds): Greetings after a delay!