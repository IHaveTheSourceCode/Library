let myLibrary = [];
const popUpFormBtn = document.querySelector(".pop-up-form-btn");
const form = document.querySelector("form");
const overlay = document.querySelector("#overlay");
const addBookBtn = document.querySelector(".add-book-btn");
const container = document.querySelector(".content");

const title = document.getElementById("title");
const name = document.getElementById("name");
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
  name.value = "";
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
const div = document.createElement("div");
const book = div.classList.add("book");
const attDesc = div.classList.add("att-desc");
const bookDesc = div.classList.add("book-desc");

function addBookToLibrary() {
  let book = new getBook(
    title.value,
    name.value,
    number_of_pages.value,
    read.checked
  );
  //assigns elements inside of div with inputs values
  document.container.appendChild(book);
  document.book.appendChild(attDesc);
  attDesc.textContent += "Title: ";
  document.book.appendChild(bookDesc);
  bookDesc.textContent += book.title;
  document.book.appendChild(attDesc);
  attDesc.textContent += "Author: ";
  document.book.appendChild(bookDesc);
  bookDesc.textContent += book.author;
  document.book.appendChild(attDesc);
  attDesc.textContent += "Number of pages: ";
  document.book.appendChild(bookDesc);
  bookDesc.textContent += book.pages;
  document.book.appendChild(attDesc);
  attDesc.textContent += "Read: ";
  document.book.appendChild(bookDesc);
  bookDesc.checked += book.read.checked;

  resetInputs();
}
