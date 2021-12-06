import React from 'react';
import './App.css';
import { Book, Nav } from './components';
import Categories from './components/Categories/Categories';

const App = () => (
  <div className="App">
    <Nav />
    <Book />
    <Categories />
  </div>
);

export default App;
