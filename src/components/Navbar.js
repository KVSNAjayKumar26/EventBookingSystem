import React from 'react'
import '../styles/Navbar.scss';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='logo'>Eventify</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/bookings">My Bookings</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;