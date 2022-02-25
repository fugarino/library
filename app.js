// Selectors
const addBtn = document.getElementById("add");
const grid = document.querySelector(".grid");
const page = document.querySelector(".app");
const inputDiv = document.querySelector(".input-div");

let myLibrary = [];

// Functions
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = true;
}

function addBookToLibrary() {}

// EventListeners
addBtn.addEventListener("click", () => {
  inputDiv.classList.add("darken");
});
inputDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("darken")) {
    inputDiv.classList.remove("darken");
  }
});
