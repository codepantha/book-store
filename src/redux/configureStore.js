import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './ducks/books/books';

const finalReducer = combineReducers({
  booksReducer,
});

const store = createStore(finalReducer, applyMiddleware(logger));

export default store;
