import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <a href="http://localhost:5174">
          <img src="/src/images/nss_logo.png" alt="NSS Logo" />
        </a>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="http://localhost:5174">Home</a></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
