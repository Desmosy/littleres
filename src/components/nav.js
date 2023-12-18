import React from 'react';
import './nav.css';
import {Routes, Route, Link} from "react-router-dom";
import BookingForm from './BookingForm';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <Link to='/BookingForm'>Reservations</Link>       
         <li><a href="/order">Order Online</a></li>
        <li><a href="/contact">Login</a></li>

      </ul>
      
      
      <Routes >
        <Route path='/BookingForm' element={<BookingForm/>}/>
      </Routes>
    </nav>
  );
}

export default Nav;
