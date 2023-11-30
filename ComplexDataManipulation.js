/*
Filename: ComplexDataManipulation.js

This code demonstrates complex data manipulation using JavaScript. It simulates a bookstore application where you can add, remove, and search for books. It also includes functionality to calculate the total price of the books.

*/

// Book constructor
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

// Bookstore class
class Bookstore {
  constructor() {
    this.books = [];
  }

  // Add book to the bookstore
  addBook(title, author, price) {
    const newBook = new Book(title, author, price);
    this.books.push(newBook);
  }

  // Remove book from the bookstore
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  // Search for books by title or author
  searchBooks(query) {
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Calculate total price of all books in the bookstore
  calculateTotalPrice() {
    const totalPrice = this.books.reduce(
      (accumulator, book) => accumulator + book.price,
      0
    );
    return totalPrice.toFixed(2);
  }
}

// Instantiate a new bookstore
const myBookstore = new Bookstore();

// Add books to the bookstore
myBookstore.addBook("The Great Gatsby", "F. Scott Fitzgerald", 15.99);
myBookstore.addBook("To Kill a Mockingbird", "Harper Lee", 12.99);
myBookstore.addBook("Pride and Prejudice", "Jane Austen", 10.99);
myBookstore.addBook("1984", "George Orwell", 14.99);

// Remove a book from the bookstore
myBookstore.removeBook("Pride and Prejudice");

// Search for books
const searchResults = myBookstore.searchBooks("Great");

// Display search results
console.log("Search Results:");
searchResults.forEach((book) =>
  console.log(`${book.title} by ${book.author} - $${book.price}`)
);

// Calculate total price of all books in the bookstore
const totalPrice = myBookstore.calculateTotalPrice();
console.log(`Total Price: $${totalPrice}`);

// Output:
// Search Results:
// The Great Gatsby by F. Scott Fitzgerald - $15.99
// Total Price: $43.97