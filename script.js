let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(title, "by " + author, pages + " pages,", read);
  };
}

function addBookToLibrary(book) {
  myLibrary += book;
}

const Hobbit = new Book("Hobbit", "Tolkien", "356", "yes");

function Show(array) {
  for (let i = 0; i <= 0; i++) {}
}
