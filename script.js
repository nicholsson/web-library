console.log("hello");
const addButton = document.querySelector(".add-book");
const myLibrary = [];

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
