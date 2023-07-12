import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id='nav-header'>
      <ul id="nav-list">
        <li><a href="#project">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Header;