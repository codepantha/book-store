const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILED = 'GET_BOOKS_FAILED';

export const addBook = (payload) => ({ type: ADD_BOOK, payload });

export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

export const getBooks = () => (dispatch) => {
  dispatch({ type: GET_BOOKS_REQUEST });

  const getAllBooks = async () => {
    try {
      const data = await fetch(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CfvJJNUCIKMGE8EBD1R3/books',
      );
      const books = await data.json();
      /* eslint-disable guard-for-in */
      /* eslint-disable no-restricted-syntax */
      /* eslint-disable prefer-destructuring */

      const booksArray = [];
      const booksObject = {};
      for (const book in books) {
        booksObject.id = book;
        booksObject.title = books[book][0].title;
        booksObject.category = books[book][0].category;
        booksArray.push(booksObject);
        console.log(booksArray);
      }
      dispatch({ type: GET_BOOKS_SUCCESS, payload: booksArray });
    } catch (err) {
      dispatch({ type: GET_BOOKS_FAILED, payload: 'something bad happened.' });
    }
  };
  getAllBooks();
};

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return [...state, ...action.payload];

    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default booksReducer;
