let myLibrary = [];

const container = document.querySelector('.card-container');

function Book(name, author) {
    this.name = name;
    this.author = author;
    this.read = false;
}

function addBookToLibrary(name, author) {
    let book = new Book(name, author);
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach( (book) => {
        let card = document.createElement('div');
        card.classList.add('card');
        let title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = book.name;
        card.appendChild(title);
        let author = document.createElement('span');
        author.classList.add('author');
        author.textContent = book.author;
        card.appendChild(author);
        let icons = document.createElement('div');
        icons.classList.add('icons');
        let rBtn = document.createElement('button');
        rBtn.classList.add('btn');
        rBtn.textContent = 'Read';
        icons.appendChild(rBtn);
        let dBtn = document.createElement('button');
        dBtn.classList.add('btn');
        dBtn.textContent = 'Remove';
        icons.appendChild(dBtn);
        card.appendChild(icons);
        container.appendChild(card);
    })
}

window.onload = () => {
    addBookToLibrary('Dune', 'Frank Herbert');
    displayBooks();
}