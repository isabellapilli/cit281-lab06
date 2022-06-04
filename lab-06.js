
const { utimes } = require("fs");
const { title } = require("process");

//Create a Book class according to the Book class specification in Part 3. By convention, the first letter of a class name is uppercase.
class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

// Create a Library class according to the Library class specification in Part 3.
class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = ""} = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn};
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, isbn: ${isbn}`)
      }
    }
    deleteBook(isbn) {

      }
    }

  const library = new Library("New York Times Best Seller List");

// Create a book
// Update the code to add a least two more books to the library. 
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const mobyDick = new Book("Moby Dick", "Herman Melville", "10/18/1851", "078583978X");
const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", "01/16/1605", "0142437239");

// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(mobyDick);
library.addBook(donQuixote);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Add an ISBN property, isbn, to server as a unique identifier to the Book class (either ISBN-10 or ISBN-13, or both)
// Add a deleteBook(isbn) method to the Library class, to delete a Book from the Library using the ISBN

// Test your code changes by updating your test code to the following test code.

// Delete a book and output library books
