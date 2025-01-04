import React from "react";
import './navbar.css';
import './Search.css';



function Navbar () {
  return (
    
      <><header className="header">
      <a href="/" className="logo">MonoModa</a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Men</a>
        <a href="/">Women</a>
        <a href="/">About Us</a>


      </nav>

      <div className='search-bar'>
          <input type="text" placeholder="Search..." />
        </div>

    </header>
  </>
    
  );
}
export default Navbar;