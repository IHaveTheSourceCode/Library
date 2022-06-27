let myLibrary = [];
const popUpFormBtn = document.querySelector(".pop-up-form-btn");
const form = document.querySelector("form");
const overlay = document.querySelector("#overlay");
const addBookBtn = document.querySelector(".add-book-btn");
const container = document.querySelector(".content");

const title = document.getElementById("title");
const author = document.getElementById("author");
const number_of_pages = document.getElementById("number_of_pages");
const read = document.getElementById("read");

popUpFormBtn.addEventListener("click", popUpForm);
addBookBtn.addEventListener("click", addBookToLibrary);

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

function resetInputs() {
  title.value = "";
  author.value = "";
  number_of_pages.value = "";
  read.checked = false;
}

function getBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// creates book elements

function addBookToLibrary() {
  let current = new getBook(
    title.value,
    author.value,
    number_of_pages.value,
    read.checked
  );

  //assigns elements inside of div with inputs values
  let book = document.createElement("div");
  book.classList.add("book");
  container.appendChild(book.cloneNode(true));

  let attDesc = document.createElement("div");
  attDesc.classList.add("att-desc");
  attDesc.textContent = "Title: ";
  book.appendChild(attDesc.cloneNode(true));
  let bookDesc = document.createElement("div");
  bookDesc.classList.add("book-desc");
  bookDesc.textContent = current.title;
  book.appendChild(bookDesc.cloneNode(true));

  attDesc.textContent = "Author: ";
  book.appendChild(attDesc.cloneNode(true));
  bookDesc.textContent = current.author;
  book.appendChild(bookDesc.cloneNode(true));

  attDesc.textContent = "Number of pages: ";
  book.appendChild(attDesc.cloneNode(true));
  bookDesc.textContent = current.pages;
  book.appendChild(bookDesc.cloneNode(true));

  attDesc.textContent = "Read: ";
  book.appendChild(attDesc.cloneNode(true));
  bookDesc.checked = current.read.checked;
  book.appendChild(bookDesc.cloneNode(true));

  resetInputs();
}
