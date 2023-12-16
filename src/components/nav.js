import React from 'react';
import './nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/contact">Login</a></li>

      </ul>
    </nav>
  );
}

export default Nav;
