/*  sophcode.js - Complex and Elaborate JavaScript Code */

// Importing external libraries
const axios = require('axios');
const moment = require('moment');

// Global variables
let counter = 0;
let data = [];

// Helper function to fetch data from external API
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    data = response.data;
    console.log('Data fetched successfully!');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Helper function to process data
function processData() {
  console.log('Processing data...');
  // Use complex data processing algorithms here
  // ...
  console.log('Data processed!');
}

// Main function
async function main() {
  console.log('Starting program...');
  await fetchData();

  while (counter < 5) {
    console.log(`Counter: ${counter}`);
    processData();
    counter++;
  }

  console.log('Program complete!');
}

// Execute main function
main();

// Complex class definition
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayUserInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
  }
}

// Create instances of User class
const user1 = new User('John Doe', 'johndoe@example.com');
const user2 = new User('Jane Smith', 'janesmith@example.com');

// Display user information
user1.displayUserInfo();
user2.displayUserInfo();

// Complex date formatting using Moment.js library
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));