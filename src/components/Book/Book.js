import React, { useState } from 'react';
import './Book.css';
import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import { addBook } from '../../redux/ducks/books/books';
import books from '../../books';

const Book = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const submitBook = (e) => {
    e.preventDefault();

    const book = {
      id: uuid(),
      title,
      author: 'Sean Kingston',
    };

    dispatch(addBook(book));
  };

  return (
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
      <div className="book__section-form">
        <form onSubmit={submitBook}>
          <p>ADD A NEW BOOK</p>
          <input
            type="text"
            name="title"
            placeholder="Book title"
            onChange={onInputChange}
            value={title}
            required
          />
          <select>
            {books.map((book) => (
              <option key={book.id} value={book.category}>
                {book.category}
              </option>
            ))}
          </select>
          <button type="submit">
            ADD BOOK
          </button>
        </form>
      </div>
    </section>
  );
};

export default Book;
