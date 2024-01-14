import React from 'react';
import './navbar.css';
// import { Link } from 'react-router-dom';
// import { Auth } from'./components/auth';

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/"><button>Home</button></Link>
      <Link href="/about">About</Link>
      <Link href="/signin">Sign In</Link>
      {/* <Auth/> */}
    </nav>
  );
}

export default Navbar;
