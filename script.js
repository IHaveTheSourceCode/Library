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
<<<<<<< HEAD

function Test(book_title) {
  this.book_title = book_title;
}

function addBookToLibrary() {
  let book_title = prompt("book name: ");
  myLibrary[0] = new Test(book_title);
}
=======
>>>>>>> 23a9f7859fb87a114fa7186b9a07e80659c2f063
