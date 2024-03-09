// Navbar.js

import React from 'react';
import './navBar.css'; // Import your CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <a className="navbar-brand" href="/">FIXMATIC</a>
      </div>
      <ul className="nav-items">
        <li><a href="/">Home</a></li>
        <li><a href="/app">App</a></li>
        <li><a href="/aboutUs">About us</a></li>
      </ul>
    </nav>
  );
}
