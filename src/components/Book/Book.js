import React, { useEffect, useState } from 'react';
import './Book.css';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { FaCircleNotch } from 'react-icons/fa';
import { addBook, getBooks, removeBook } from '../../redux/books/books';

const Book = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Romance');

  // books state;
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategoryChange = (e) => setCategory(e.target.value);

  const submitBook = (e) => {
    e.preventDefault();

    const book = {
      id: uuid(),
      title,
      author: 'Sean Kingston',
      category,
    };

    dispatch(addBook(book));
    setTitle('');
  };

  const removeBookFromStore = (book) => {
    dispatch(removeBook(book));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <section className="book__section section__padding">
      {books.join('') !== 'Error!' ? (
        books.map((book) => (
          <div key={book.id} className="book__container-card shadow-4">
            <div className="book__container-card_details">
              <p className="book__container-card_details-category">
                {book.category}
              </p>
              <p className="book__container-card_details-title">{book.title}</p>
              <p className="book__container-card_details-author">
                {book.author}
              </p>
              <button type="button" className="first grow">Comments</button>
              <button type="button" className="grow" onClick={() => removeBookFromStore(book)}>
                Remove
              </button>
              <button type="button" className="grow">Edit</button>
            </div>

            <div className="book__container-card_progress-container">
              <div className="book__container-card_progress">
                <FaCircleNotch />
                <div className="book__container-card_progress-percentage">
                  <p>64%</p>
                  <span>Completed</span>
                </div>
              </div>

              <div className="book__container-card_current-chapter">
                <h2>Current Chapter</h2>
                <p>Chapter 17</p>
                <button type="button" className="pointer">UPDATE PROGRESS</button>
              </div>
            </div>

          </div>
        ))
      ) : (
        <p>Ooops! Something bad happened...</p>
      )}
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
          <select value={category} onChange={onCategoryChange}>
            {books.map((book) => (
              <option key={book.id} value={book.category}>
                {book.category}
              </option>
            ))}
          </select>
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </section>
  );
};

export default Book;
