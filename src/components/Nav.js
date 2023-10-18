// src/components/Nav.js
import React, { useState } from 'react';
import { Link } from 'gatsby';
import './Nav.css';  // Import the CSS file here

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <button className="nav-toggle" onClick={handleToggle}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
        {/* ...other links */}
      </ul>
    </nav>
  );
};

export default Nav;
