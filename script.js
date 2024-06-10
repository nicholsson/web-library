
const addButton = document.querySelector(".add-book");
const addBook = document.querySelector(".add-book-to-library")
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#close-btn");
const booksContainer = document.querySelector(".books-container");

booksContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete-book")){
        const bookIndex = Number(event.target.dataset.booknumber);
        myLibrary.splice(bookIndex, 1);
        readLibrary();
    }
    if(event.target.classList.contains("changeStatus")){
        const bookIndex = Number(event.target.dataset.booknumber);
        myLibrary[bookIndex].toggleReadStatus();
        readLibrary();
    }
})

let myLibrary = [];

addBook.addEventListener("click", () => {
    addBookToLibrary();
    readLibrary();
    clearForm();
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

Book.prototype.toggleReadStatus = function(){
    this.readStatus = !this.readStatus;
}

function addBookToLibrary(){
    //takes data from input
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readStatus = document.querySelector('#read').checked;
    //add book to library
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function readLibrary() {
    booksContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let myBook = myLibrary[i];
        let title = myBook.title;
        let pages = myBook.pages;
        let author = myBook.author;
        let readStatus = myBook.readStatus;
        showLibrary(title, author, pages, readStatus, i);
    }
}

function showLibrary(title, author, pages, status, i){
    // do something to show the library in the DOM
    let readingStatus = "";
    status ? readingStatus = "Read" : readingStatus = "Not read"
    const book = document.createElement("div");
    book.setAttribute("class", "book");
    book.innerHTML = `<p class="book-title">${title}</p>
    <p class="by-author">by</p>
    <p class="author-name">${author}</p>
    <p class="book-pages">${pages} pages</p>
    <p class="read-status">${readingStatus}</p>
    <button class="changeStatus" data-booknumber="${i}">Change Status</button>
    <button class="delete-book" data-booknumber="${i}">Delete</button>`;
    booksContainer.appendChild(book);
}

function clearForm(){
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
    document.querySelector("#read").checked = false;
}