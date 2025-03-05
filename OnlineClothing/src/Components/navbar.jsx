import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons
import "./navbar.css";
import "./Search.css";


function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });
  const [focused, setFocused] = useState(false); // New state for managing focus of the search bar

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")) || null);
    };

    // Listen for storage changes (login/logout)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Check for user update on navigation
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [navigate]); // Runs every time navigation happens

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleClickSearch = () => {
    setFocused(true);
  };

  const handleBlurSearch = () => {
    setFocused(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Thread & Co.</Link>

      <nav className="navbar">
        <Link to="/men">Mens</Link>
        <Link to="/women">Womens</Link>
        <Link to="/about">About Us</Link>
      </nav>

      {/* Search Bar */}
      <div
        className={`search-bar ${focused ? "focused" : ""}`}
        onClick={handleClickSearch}
      >
        <input
          type="text"
          placeholder="Search..."
          onBlur={handleBlurSearch}
        />
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>

      <div className="button-container">
        {user ? (
          <>
            <span className="username">Welcome, {user.username.split(" ")[0]}!</span>

            <button className="logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login"><button className="login">Login</button></Link>
            <Link to="/sighup"><button className="signup">Sign Up</button></Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
