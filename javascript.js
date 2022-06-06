let myLibrary = [];

const container = document.querySelector('.card-container');
const addBtn = document.querySelector('#bookBtn');
const bookModal = document.querySelector('#bookModal');
const bookForm = document.querySelector('#addBookForm');
const overlay = document.querySelector('#overlay');

addBtn.onclick = () => {
    bookForm.reset();
    bookModal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    bookModal.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.onclick = () => closeModal();

bookForm.onsubmit = (e) => {
    e.preventDefault();
    const v1 = document.getElementById('input-title').value;
    const v2 = document.getElementById('input-author').value;
    const v3 = document.getElementById('input-read').value;
    const newBook = new Book(v1, v2, v3);
    addBookToLibrary(newBook);
    closeModal();
}

function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = (read == 'on') ? true : false;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    container.textContent='';
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

/*window.onload = () => {
    addBookToLibrary('Dune', 'Frank Herbert');
    displayBooks();
}*/