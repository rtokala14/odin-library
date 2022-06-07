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
    const v3 = document.getElementById('input-read').checked;
    const newBook = new Book(v1, v2, v3);
    addBookToLibrary(newBook);
    closeModal();
}

function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    container.textContent='';
    myLibrary.forEach( (book, index) => {
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
        if (book.read) rBtn.classList.add('active');
        rBtn.id = `btn-${index}`;
        rBtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) {
                let id = e.target.id;
                let index = Number(id.charAt(id.length - 1));
                myLibrary[index].read = false;
                e.target.classList.remove('active');
            }
            else {
                let id = e.target.id;
                let index = Number(id.charAt(id.length - 1));
                myLibrary[index].read = true;
                e.target.classList.add('active');
            }
        })
        rBtn.textContent = 'Read';
        icons.appendChild(rBtn);
        let dBtn = document.createElement('button');
        dBtn.classList.add('btn');
        dBtn.textContent = 'Remove';
        dBtn.id = `dBtn-${index}`;
        dBtn.addEventListener('click', (e) => {
            let id = e.target.id;
            let index = Number(id.charAt(id.length - 1));
            myLibrary.splice(index, 1);
            displayBooks();
        })
        icons.appendChild(dBtn);
        card.appendChild(icons);
        container.appendChild(card);
    })
}

/*window.onload = () => {
    addBookToLibrary('Dune', 'Frank Herbert');
    displayBooks();
}*/