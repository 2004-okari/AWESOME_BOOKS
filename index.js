class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.store = JSON.parse(localStorage.getItem('store')) || [];
  }

  addBook() {
    this.store.push();
    localStorage.setItem('store', JSON.stringify(this.store));
  }

  displayBook() {
    const book = document.querySelector('#book');
  }
}


//Display Add section

const context = document.querySelector('.head-sec-2');
const headContainer2 = document.querySelector('.head-container-2');

headContainer2.style.display = 'none';

context.addEventListener('click', ()=> {
  headContainer2.style.display = '';
});