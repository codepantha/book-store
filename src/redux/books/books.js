const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const ADD_BOOK_FAILED = 'ADD_BOOK_FAILED';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILED = 'GET_BOOKS_FAILED';


export const getBooks = () => (dispatch) => {
  dispatch({ type: GET_BOOKS_REQUEST });

  const getAllBooks = async () => {
    try {
      const data = await fetch(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CfvJJNUCIKMGE8EBD1R3/books',
      );
      const books = await data.json();
      /* eslint-disable no-restricted-syntax */

      const booksArray = [];

      for (const [key, value] of Object.entries(books)) {
        const bookObject = {};
        bookObject.id = key;
        bookObject.title = value[0].title;
        bookObject.category = value[0].category;
        booksArray.push(bookObject);
      }

      dispatch({ type: GET_BOOKS_SUCCESS, payload: booksArray });
    } catch (err) {
      dispatch({ type: GET_BOOKS_FAILED, payload: 'Error!' });
    }
  };
  getAllBooks();
};

export const addBook = (payload) => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CfvJJNUCIKMGE8EBD1R3/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      category: payload.category,
    }),
  })
    .then((res) => {
      if (res.status === 201) {
        dispatch({ type: ADD_BOOK, payload });
      } else {
        dispatch({ type: ADD_BOOK_FAILED, payload: 'Error!' });
      }
    });
};

export const removeBook = (payload) => (dispatch) => {
  const { id } = payload;
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CfvJJNUCIKMGE8EBD1R3/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      app_id: 'CfvJJNUCIKMGE8EBD1R3',
      item_id: id,
    }),
  });
  dispatch({ type: REMOVE_BOOK, payload });
};

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return [...state, ...action.payload];

    case GET_BOOKS_FAILED:
      return [...state, ...action.payload];

    case ADD_BOOK:
      return [...state, action.payload];

    case ADD_BOOK_FAILED:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default booksReducer;
