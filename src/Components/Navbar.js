// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS 파일을 임포트합니다.

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-title">SURVEILLANCE SYSTEM</Link> {/* "My Website"를 "Home" 링크와 합칩니다. */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
