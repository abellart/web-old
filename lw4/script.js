const url = "https://wolnelektury.pl/api/books";

fetch(url, { method: "GET" })
  .then((value) => value.json())
  .then((value) => {
    showBooks(value.slice(0, 40));
  });

function showBooks(data) {
  const booksEl = document.querySelector(".books");
  data.forEach((book) => {
    const bookEl = document.createElement("div");
    bookEl.classList.add("book");
    bookEl.innerHTML = `
        <img src="${book.simple_thumb}" class="book-cover">
        <div class="book-info">
          <div class="book-title">
            ${book.title}
          </div>
          <div class="book-author">
            Author: ${book.author}
          </div>
          <div class="book-category">
            Gener: ${book.genre}
          </div>
        </div>`;
    booksEl.appendChild(bookEl);
  });
}