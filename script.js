
const addButton = document.querySelector(".add-book");
const addBook = document.querySelector(".add-book-to-library")
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#close-btn");

let myLibrary = [];

addBook.addEventListener("click", () => {
    addBookToLibrary();
})

addButton.addEventListener("click", () => {
    dialog.showModal();
})

closeBtn.addEventListener("click", () => {
    dialog.close();
})

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(){
    //takes data from input
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readStatus = document.querySelector('input[name="readStatus"]:checked').value;
    //add book to library
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function readLibrary() {
    for (let i = 0; i < myLibrary.length(); i++){
        let myBook = myLibrary[i];
        let title = myBook.title;
        let pages = myBook.pages;
        let author = myBook.author;
        let readStatus = myBook.readStatus;
        showLibrary(title, author, pages, readStatus);
    }
}

function showLibrary(title, author, pages, status){
    // do something to show the library in the DOM
}