let myLibrary = [];
const popUpFormBtn = document.querySelector(".pop-up-form-btn");
const form = document.querySelector("form");
const overlay = document.querySelector("#overlay");
const addBookBtn = document.querySelector("add-book-btn");

const title = document.getElementById("title");
const name = document.getElementById("name");
const number_of_pages = document.getElementById("number_of_pages");
const read = document.getElementById("read");

popUpFormBtn.addEventListener("click", popUpForm);

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

//resets inputs values
function resetInputs() {
  title.value = "";
  name.value = "";
  number_of_pages.value = "";
  read.checked = false;
}

function getBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(title, "by " + author, pages + " pages,", read);
  };
}

function addBookToLibrary() {
  //create div
  //add class
  //create elements inside of div using inputs values
}
