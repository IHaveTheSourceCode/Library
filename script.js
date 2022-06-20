let myLibrary = [];
const addBookBtn = document.querySelector(".addBookButton");
const form = document.querySelector("form");
const overlay = document.querySelector("#overlay");

addBookBtn.addEventListener("click", popUpForm);

// function that pops up form, after button is clicked
let btnActive = true;
function popUpForm() {
  if (btnActive === true) {
    form.style.transform = "scale(1.2)";
    form.style.visibility = "visible";
    overlay.classList.add("overlay");
    btnActive = false;
    overlay.addEventListener("click", popUpForm);
  } else {
    form.style.visibility = "hidden";
    form.style.transform = "scale(0.1)";
    overlay.classList.remove("overlay");
    overlay.removeEventListener("click", popUpForm);
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

function addBookToLibrary() {}
