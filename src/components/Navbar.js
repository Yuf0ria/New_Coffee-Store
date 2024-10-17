import React from 'react';

import { Link } from 'react-router-dom';

// import './Navbar.css'; // Import the CSS file

const Navbar = () => {

  return (

    <nav className="navbar">

      <div className="navbar-brand">

        <Link to="/" className="navbar-logo">Coffee Shop</Link>

      </div>

      <ul className="navbar-links">

        <li>

          <Link to="/" className="navbar-link">Home</Link>

        </li>

        

        <li>

          <Link to="/cart" className="navbar-link">Cart</Link>

        </li>

      </ul>

    </nav>

  );

};

export default Navbar;