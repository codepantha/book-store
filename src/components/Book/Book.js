import React from 'react';
import './Book.css';
import books from '../../books';

const Book = () => (
  <section className="book__section section__padding">
    {books.map((book) => (
      <div key={book.id} className="book__container-card">
        <div className="book__container-card_details">
          <p className="book__container-card_details-category">
            {book.category}
          </p>
          <p className="book__container-card_details-title">{book.name}</p>
          <p className="book__container-card_details-author">{book.author}</p>
          <button type="button">Remove</button>
        </div>
      </div>
    ))}
  </section>
);

export default Book;
