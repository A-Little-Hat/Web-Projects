var booklist = []
if (localStorage.getItem('books') === null) {

} else {
    booklist = JSON.parse(localStorage.getItem('books'));
}
displaylist();
function validate() {
    var name = document.getElementById("title").value
    var author = document.getElementById("author").value
    var isbn = document.getElementById("isbn").value
    if (name === '' || author === '' || isbn === '') {
        alert("please fill all details")
    }
    else {
        var id = new Date()
        var bookX = new book(name, author, isbn, id)
        booklist.push(JSON.stringify(bookX))
        localStorage.setItem('books', JSON.stringify(booklist))
        document.getElementById("book-list").innerHTML = ""
        displaylist();
    }
}
class book {
    constructor(name, author, isbn, id) {
        this.name = name
        this.author = author
        this.isbn = isbn
        this.id = id
    }
    display() {
        console.log(this.name, this.author, this.isbn)
    }
}
function displaylist() {
    for (let index = 0; index < booklist.length; index++) {
        const element = JSON.parse(booklist[index]);
        document.getElementById("book-list").innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.isbn}</td>
            <td><button id="${element.id}" onclick="deletebook(this)" >X</button></td>
        </tr>
        `
    }
}
function deletebook(element) {
    for (let index = 0; index < booklist.length; index++) {
        const result = JSON.parse(booklist[index]);
        if (result.id == element.id) {
            element.parentElement.parentElement.remove();
            booklist.splice(index, 1);
            document.getElementById("book-list").innerHTML = ""
            displaylist();
            break
        }
    }
    localStorage.setItem('books', JSON.stringify(booklist))
}