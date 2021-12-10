import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './Nav.css';

const Nav = () => (
  <nav className="nav__container section__padding shadow-5">
    <p className="nav__logo pointer">BookStore</p>
    <ul className="nav__container-items">
      <li className="nav__container-items_link active">
        <Link to="/books" className="link">Books</Link>
      </li>
      <li className="nav__container-items_link">
        <Link to="/categories" className="link">Categories</Link>
      </li>
    </ul>
    <ImUser className="pointer" />
  </nav>
);

export default Nav;
