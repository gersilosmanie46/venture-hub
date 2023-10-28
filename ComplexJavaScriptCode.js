// Filename: ComplexJavaScriptCode.js
// Description: A complex and elaborate JavaScript code

// An example of a complex and elaborate JavaScript code

// Define a class called Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Method to get the person's details
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

// Create an array of Person objects
const people = [
  new Person('John Doe', 25, 'Male'),
  new Person('Jane Smith', 30, 'Female'),
  new Person('Bob Johnson', 40, 'Male')
];

// Function to filter people based on age
function filterByAge(minAge, maxAge) {
  return people.filter(person => person.age >= minAge && person.age <= maxAge);
}

// Print the filtered people
console.log('Filtered People (Age between 25 and 35):');
filterByAge(25, 35).forEach(person => console.log(person.getDetails()));

// Define a function to calculate the average age
function calculateAverageAge() {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

// Print the average age
console.log('\nAverage Age:', calculateAverageAge());

// Define a function to find the oldest person
function findOldestPerson() {
  let oldestPerson = people[0];

  for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldestPerson.age) {
      oldestPerson = people[i];
    }
  }

  return oldestPerson;
}

// Print the oldest person
console.log('\nOldest Person:');
console.log(findOldestPerson().getDetails());

// Define a function to sort people by age in descending order
function sortByAgeDescending() {
  return [...people].sort((a, b) => b.age - a.age);
}

// Print the sorted people
console.log('\nPeople (Sorted by Age - Descending)');
sortByAgeDescending().forEach(person => console.log(person.getDetails()));

// Define a function to group people by gender
function groupByGender() {
  const group = {};

  people.forEach(person => {
    if (group[person.gender]) {
      group[person.gender].push(person);
    } else {
      group[person.gender] = [person];
    }
  });

  return group;
}

// Print the grouped people
console.log('\nPeople Grouped by Gender:');
console.log(groupByGender());

// ... Continue with more complex and elaborate code
// ... totaling more than 200 lines