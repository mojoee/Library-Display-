let myLibrary = [];

function Book(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Yes");
let book2 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 398, "Yes");
let book3 = new Book("The Two Towers", "J.R.R. Tolkien", 327, "Yes");
let book4 = new Book("The Return of the King", "J.R.R. Tolkien", 347, "Yes");
myLibrary.push(book1, book2, book3, book4);

function addBookToLibrary(){
    var title = prompt("Enter the title of the book");
    let author = prompt("Enter the author of the book");
    let pages = prompt("Enter the number of pages in the book");
    let read = prompt("Have you read this book? (yes/no)");
    console.log(title, author, pages, read); // Check the input values
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showLibrary(myLibrary);
}

function showLibrary(array){
    console.log("The library contains the following books")
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function displayBooks() {
    const tableBody = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Clear existing table rows

    // Iterate through the array and add each element as a row in the table
    myLibrary.forEach((book, index) => {
        let row = tableBody.insertRow();
        
        let cellTitle = row.insertCell(0);
        cellTitle.textContent = book.title;

        let cellAuthor = row.insertCell(1);
        cellAuthor.textContent = book.author;

        let cellPages = row.insertCell(2);
        cellPages.textContent = book.pages;

        let cellRead = row.insertCell(3);
        cellRead.textContent = book.read;

        // Toggle Read Status button
        let toggleReadCell = row.insertCell(4);
        let toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = "Toggle";
        toggleReadBtn.addEventListener('click', () => toggleReadStatus(index));
        toggleReadCell.appendChild(toggleReadBtn);

        let removeCell = row.insertCell(5);
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.setAttribute("onclick", `removeBook(${index})`); // Add onclick event with the current index
        removeCell.appendChild(removeBtn);

    });
}

function removeBook(index) {
    // Remove the book from the array
    myLibrary.splice(index, 1);
    // Refresh the table to reflect changes
    displayBooks();
}

function toggleReadStatus(index) {
    // Toggle the 'read' status of the book
    myLibrary[index].read = myLibrary[index].read === "Yes" ? "No" : "Yes";
    // Refresh the table to reflect the updated 'read' status
    displayBooks();
}

// Add event listener to the button
document.getElementById('showTableBtn').addEventListener('click', displayBooks);
