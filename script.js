let myLibrary = [];
const addBookBtn = document.querySelector(".addBookButton");
const form = document.querySelector("form");

addBookBtn.addEventListener("click", popUpForm);

// function that pops up form, after button is clicked
let btnActive = true;
function popUpForm() {
  if (btnActive === true) {
    form.style.transform = "scale(1.2)";
    form.style.visibility = "visible";
    btnActive = false;
  } else {
    form.style.visibility = "hidden";
    form.style.transform = "scale(0.1)";
    btnActive = true;
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
