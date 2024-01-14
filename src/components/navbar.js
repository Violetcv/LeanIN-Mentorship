import React from 'react';
import './navbar.css';
// import { Link } from 'react-router-dom';
// import { Auth } from'./components/auth';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/"><button>Home</button></a>
    <a href="/about"><button>About</button></a>
    <a href="/signin"><button>Sign In</button></a>
      {/* <Auth/> */}
    </nav>
  );
}

export default Navbar;
