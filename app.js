// Selectors
const addBtn = document.getElementById("add");
const grid = document.querySelector(".grid");
const page = document.querySelector(".app");
const inputDiv = document.querySelector(".input-div");
const submitBtn = document.querySelector(".submit");
const inputTitle = document.querySelector(".input-title");
const inputAuthor = document.querySelector(".input-author");
const inputPages = document.querySelector(".input-pages");
const inputCheckbox = document.querySelector(".checkbox-btn");

let myLibrary = [];

// Functions
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const card = document.createElement("div");
  card.classList.add("book-card");
  const newBook = new Book(
    `${inputTitle.value}`,
    `${inputAuthor.value}`,
    `${inputPages.value}`,
    `${inputCheckbox.checked}`
  );
  // Book Title
  const bookTitle = document.createElement("div");
  bookTitle.classList.add("book-header");
  bookTitle.textContent = `"${newBook.name}"`;
  card.append(bookTitle);
  // Book Author
  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = newBook.author;
  card.append(bookAuthor);
  // Book Pages
  const bookPages = document.createElement("div");
  bookPages.classList.add("book-pages");
  bookPages.textContent = `${newBook.pages} pages`;
  card.append(bookPages);
  // Book Read
  const bookRead = document.createElement("div");
  if (inputCheckbox.checked) {
    bookRead.textContent = "Read";
    bookRead.classList.add("book-read");
  } else {
    bookRead.textContent = "Not read";
    bookRead.classList.add("book-not-read");
  }
  card.append(bookRead);
  // Book Remove
  const bookRemove = document.createElement("div");
  bookRemove.classList.add("book-remove");
  bookRemove.textContent = "Remove";
  bookRemove.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  card.append(bookRemove);
  // Book append Card
  grid.append(card);
  // Add newBook into myLibrary
  myLibrary.push(newBook);
  console.log(myLibrary);
  inputDiv.classList.remove("darken");
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputCheckbox.checked = null;
}

// EventListeners
addBtn.addEventListener("click", () => {
  inputDiv.classList.add("darken");
});

inputDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("darken")) {
    inputDiv.classList.remove("darken");
  }
});

submitBtn.addEventListener("click", addBookToLibrary);
