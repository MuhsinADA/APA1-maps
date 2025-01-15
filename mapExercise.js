const catalogue = new Map();

function addBook(bookId, title, author) {
  catalogue.set(bookId, { title, author });
}

function findBook(bookId) {
  return catalogue.get(bookId);
}

function removeBook(bookId) {
  catalogue.delete(bookId);
}

function listAllBooks() {
  for (const [bookId, book] of catalogue.entries()) {
    console.log(`ID: ${bookId}, Title: ${book.title}, Author: ${book.author}`);
  }
}

function numberOfBooks() {
  return catalogue.size;
}

// Test the functions
addBook("12345", "The Lord of the Rings", "J.R.R. Tolkien");
addBook("67890", "Pride and Prejudice", "Jane Austen");

// console.log(findBook("12345")); // Should output the book object
// removeBook("12345");
listAllBooks(); // Should list the remaining book(s)
// console.log(numberOfBooks()); // Should output the correct count