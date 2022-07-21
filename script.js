let myLibrary = [];

const popUpFormBtn = document.querySelector(".pop-up-form-btn");
const form = document.querySelector("form");
const overlay = document.querySelector("#overlay");
const addBookBtn = document.querySelector(".add-book-btn");
const container = document.querySelector(".container");

const title = document.getElementById("title");
const author = document.getElementById("author");
const number_of_pages = document.getElementById("number_of_pages");
const read = document.getElementById("read");

popUpFormBtn.addEventListener("click", popUpForm);
addBookBtn.addEventListener("click", addBookToLibrary);

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

let i = 0;
function addBookToLibrary() {
  let current = new getBook(
    title.value,
    author.value,
    number_of_pages.value,
    read.checked
  );

  myLibrary[i] = current;

  //assigns elements inside of div with inputs values
  let book = document.createElement("div");
  let dataSelector = "p" + i;
  book.dataset.position = dataSelector;
  book.classList.add("book");
  container.appendChild(book);
  i++;

  let attDesc = document.createElement("div");
  attDesc.classList.add("att-desc");
  attDesc.textContent = "Title: ";
  book.appendChild(attDesc);
  let bookDesc = document.createElement("div");
  bookDesc.classList.add("book-desc");
  bookDesc.textContent = current.title;
  book.appendChild(bookDesc);

  let attDesc2 = document.createElement("div");
  attDesc2.classList.add("att-desc");
  attDesc2.textContent = "Author: ";
  book.appendChild(attDesc2);
  let bookDesc2 = document.createElement("div");
  bookDesc2.classList.add("book-desc");
  bookDesc2.textContent = current.author;
  book.appendChild(bookDesc2);

  let attDesc3 = document.createElement("div");
  attDesc3.classList.add("att-desc");
  attDesc3.textContent = "Number of pages: ";
  book.appendChild(attDesc3);
  let bookDesc3 = document.createElement("div");
  bookDesc3.classList.add("book-desc");
  bookDesc3.textContent = current.pages;
  book.appendChild(bookDesc3);

  let attDesc4 = document.createElement("div");
  attDesc4.classList.add("att-desc");
  attDesc4.textContent = "Read: ";
  book.appendChild(attDesc4);
  let bookDesc4 = document.createElement("input");
  bookDesc4.type = "checkbox";
  bookDesc4.classList.add("book-checkbox");
  if (read.checked === true) {
    bookDesc4.checked = true;
  }
  book.appendChild(bookDesc4);

  book.addEventListener("mouseenter", function () {
    let bookOverlay = document.createElement("div");
    bookOverlay.dataset.overlay = dataSelector;
    bookOverlay.classList.add("book-overlay");
    book.append(bookOverlay);
    let deleteButton = document.createElement("div");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    bookOverlay.append(deleteButton);
    deleteButton.addEventListener("click", function () {
      book.replaceChildren();
      book.remove();
    });
    book.addEventListener("mouseleave", function () {
      document.querySelector(`[data-overlay = ${dataSelector}`).remove();
    });
  });
  resetInputs();
  form.style.visibility = "hidden";
  form.style.transform = "scale(0.1)";
  overlay.classList.remove("overlay");
  overlay.removeEventListener("click", popUpForm);
  btnActive = true;
}
// lower the size of addBookToLibrary function
