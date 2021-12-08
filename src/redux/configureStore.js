import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const finalReducer = combineReducers({
  booksReducer,
});

const store = createStore(finalReducer, applyMiddleware(logger, thunk));

export default store;
