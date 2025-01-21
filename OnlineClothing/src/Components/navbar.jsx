import React from "react";
import './navbar.css';
import './search.css';

import { Link } from 'react-router-dom';




function Navbar () {
  return (
    
      <><header className="header">
      <Link to="/" className="logo" >MonoModa.co</Link>
      <nav className="navbar">
        
      < Link to= "/arrivals">New Arrivals</Link>
      <Link to = "/contact">Contact Us</Link>
      <Link to = "/about">About Us</Link>
       
        


      </nav>
      <div className='search-bar'>
          <input type="text" placeholder="Search..." />
        </div>
    <div class="button-container">
        <Link to = '/login'><button class="login" onclick="login()">Login</button></Link>
        <button class="signup" onclick="signUp()">Sign Up</button>
    </div>
        

    </header>
  </>
    
  );
}
export default Navbar;