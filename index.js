//DOM ELEMENTS

const bookForm = document.querySelector('.form');
const bookContainer = document.querySelector('.book-container');
const titleOfBook = bookForm['title'];
const authorOfBook = bookForm['author'];



const library = JSON.parse(localStorage.getItem('library')) || [];

const addBook = (title, author) => {
  library.push({
    title,
    author,
  })

  localStorage.setItem('library', JSON.stringify(library));

  return { title, author };
}

let i = 0;
const createBook = ({ title, author }) => {

  i++;
  const bookStore = document.createElement('div');
  bookStore.classList.add('book-store');
  bookStore.innerHTML = `
  <div class="bookShelf">
  <p class="book-title">${title}</p>
  <p class="book-author">${author}</p>
  </div>
  <button type="button" class='delete remove${i}' onclick='removeBook()'>remove</button>
  `
  
  bookContainer.appendChild(bookStore);
}

library.forEach(createBook);

document.querySelector('.add-btn').addEventListener('click', (e) => {
  e.preventDefault();
  if (titleOfBook.value != '' && authorOfBook.value != '') {
    const newBook = addBook(
      titleOfBook.value,
      authorOfBook.value,
      );
      
      createBook(newBook);
    }

  titleOfBook.value = '';
  authorOfBook.value = '';
})

const removers = document.querySelectorAll('.delete');

removers.forEach(remover => {
  remover.addEventListener('click', () => {
    library.splice(index , 1);
  });
})