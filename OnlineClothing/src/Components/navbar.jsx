import React from "react";
import './navbar.css';



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



    </header>
    <div className="search">
        <div>SearchBar</div>
        <div>SearchResults</div>
      
    </div></>
    
  );
}
export default Navbar;