// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS ������ ����Ʈ�մϴ�.

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-title">SURVEILLANCE SYSTEM</Link> {/* "My Website"�� "Home" ��ũ�� ��Ĩ�ϴ�. */}
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
