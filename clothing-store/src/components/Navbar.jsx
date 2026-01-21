import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cartCount, setIsCartOpen } = useCart();

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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
