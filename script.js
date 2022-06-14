let myLibrary = [];
const addBookBtn = document.querySelector(".addBookButton");

addBookBtn.addEventListener("click", popUpForm);

// function that pops up form, after button is clicked
function popUpForm() {
  if (document.querySelector("form").style.display == "none") {
    document.querySelector("form").style.display = "flex";
  } else {
    document.querySelector("form").style.display = "none";
  }
}

// function that closes form, when anything outside of
// it is clicked
function closeForm() {}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(title, "by " + author, pages + " pages,", read);
  };
}

function Test(book_title) {
  this.book_title = book_title;
}

function addBookToLibrary() {
  let book_title = prompt("book name: ");
  myLibrary[0] = new Test(book_title);
}
