

 export function renderBook(book) {
    const bookContainer = document.createElement('div');
    const titleEl = document.createElement('h3');
    const authorEl = document.createElement('p');
    const dateEl = document.createElement('p');
    titleEl.textContent = book.title;
    authorEl.textContent = book.author;
    dateEl.textContent = book.publishDate;
    bookContainer.classList.add('books');
    titleEl.classList.add('book-title');

    bookContainer.append(titleEl, authorEl, dateEl);
    return bookContainer;
}