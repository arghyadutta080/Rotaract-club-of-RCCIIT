import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Events</Link></li>
        <li><Link to="/about">Notice</Link></li>
        <li><Link to="/contact">About</Link></li>
        <li><Link to="/contact">Team</Link></li>
        <li><Link to="/contact">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;