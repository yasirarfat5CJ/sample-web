// src/components/Navbar.jsx
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">Yasir's Profile</div>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <a href="#">Home</a>
          <a href="#gallery">Gallery</a>
          
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger mobile-only" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleMenu}>×</span>
        <a href="#" onClick={toggleMenu}>Home</a>
        <a href="#gallery" onClick={toggleMenu}>Gallery</a>
        
      </div>
    </>
  );
}

export default Navbar;
