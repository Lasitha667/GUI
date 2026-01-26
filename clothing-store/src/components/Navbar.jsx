import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X, LogOut, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          Thread & Co.
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/men" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Men</NavLink>
          <NavLink to="/women" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Women</NavLink>
        </div>

        <div className="nav-actions">
          <div className="desktop-auth">
            {user ? (
              <div className="user-greeting">
                <span className="welcome-text">Welcome, {user.username}</span>
                <button onClick={logout} className="logout-btn" title="Logout">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="nav-icon-link">Login</Link>
                <Link to="/signup" className="nav-btn-primary">Sign Up</Link>
              </>
            )}
          </div>

          <button className="icon-btn" onClick={() => setIsCartOpen(true)}>
            <div style={{ position: 'relative' }}>
              <ShoppingBag size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </button>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="mobile-link">Home</NavLink>
          <NavLink to="/men" onClick={() => setIsOpen(false)} className="mobile-link">Men</NavLink>
          <NavLink to="/women" onClick={() => setIsOpen(false)} className="mobile-link">Women</NavLink>

          <div className="mobile-auth-actions">
            {user ? (
              <>
                <div className="mobile-user-info">
                  <User size={16} />
                  <span>{user.username}</span>
                </div>
                <button onClick={() => { logout(); setIsOpen(false); }} className="mobile-link highlight" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '0.75rem 0', fontSize: '1rem' }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="mobile-link">Login</Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="mobile-link highlight">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
