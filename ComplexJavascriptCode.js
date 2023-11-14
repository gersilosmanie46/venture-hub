/* 
   Filename: ComplexJavascriptCode.js
   Content: Implementation of a complex and sophisticated JavaScript code
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Subclass representing a student
class Student extends Person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }

  study() {
    console.log(`${this.name} is studying at ${this.school}.`);
  }
}

// Function to find the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// An array of random numbers
const numbers = [2, 5, 3, 7, 9, 10, 11, 4, 6, 8];

// Sum of numbers using the sumArray function
const sum = sumArray(numbers);
console.log(`The sum of the numbers is: ${sum}`);

// Check if numbers in the array are prime
console.log("Prime numbers in the array:");
for (let num of numbers) {
  if (isPrime(num)) {
    console.log(num);
  }
}

// Creating instances of Person and Student classes
const person = new Person("John Doe", 25);
const student = new Student("Jane Smith", 20, "ABC University");

// Greetings and studying
person.greet();
student.greet();
student.study();