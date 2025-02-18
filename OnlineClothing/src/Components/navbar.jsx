import React from "react";
import './navbar.css';
import './search.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">Thread & Co.</Link>
        <nav className="navbar">
          <Link to="/men">Mens</Link>
          <Link to="/women">Womens</Link>
          <Link to="/about">About Us</Link>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="button-container">
          <Link to="/login"><button className="login">Login</button></Link>
         
          <Link to="/sighup"><button className="sighup">SignUp</button></Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
