import React from "react";
import './navbar.css';
import './search.css';
import Logo from '../assets/610e4e1ceb531802e43da44d89f1f86e.jpg'
import { Link } from 'react-router-dom';




function Navbar () {
  return (
    
      <><header className="header">
      <a href="/" className="logo" img src ={Logo}>MonoModa</a>
      <nav className="navbar">
        <Link to = "/Home"> Home</Link>
        <Link to = "/New Arrivals"> New Arrivals</Link>
        <Link to = "/Contact Us">  Contact Us</Link>
        <Link to = "/About Us"> About Us</Link>
        


      </nav>
      <div className='search-bar'>
          <input type="text" placeholder="Search..." />
        </div>
<div class="button-container">
        <button class="login" onclick="login()">Login</button>
        <button class="signup" onclick="signUp()">Sign Up</button>
    </div>
        

    </header>
  </>
    
  );
}
export default Navbar;