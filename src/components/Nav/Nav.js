import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav>
    <p>
      <Link to="/books">Books</Link>
    </p>
    <p>
      <Link to="/categories">Categories</Link>
    </p>
  </nav>
);

export default Nav;
