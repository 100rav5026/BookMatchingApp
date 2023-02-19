import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <nav className="nav-bar">
      <img src="/images/Logo.png" className="Logo" alt="Book Matching Logo"/>
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/about">About</Link>
      <Link className="nav-item" to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
