// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-title">
          <Link to="/">SURVEILLANCE SYSTEM</Link>
        </li>
        <li>
          <Link to="/Info">사용방법</Link>
        </li>
        <li>
          <Link to="/Mapping">디지털 모델링</Link>
        </li>
        <li>
          <Link to="/Simulation">시뮬레이션</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
