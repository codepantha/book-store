import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Book, Nav, Categories } from './components';

const App = () => (
  <div className="App">
    <Nav />
    <Routes>
      <Route path="/books" element={<Book />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
