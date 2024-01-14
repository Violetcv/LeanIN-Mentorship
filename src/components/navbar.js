import React from 'react';
import './navbar.css';
// import { Link } from 'react-router-dom';
// import { Auth } from'./components/auth';

function Navbar() {
  return (
    <nav className="navbar">
      {/* <h1>My React App</h1> */}
      <div className='elements'>
    <a href="/"><button>Home</button></a>
    <a href="/about"><button>About</button></a>
    <a href="/signin"><button>Sign In</button></a>
    </div>
      {/* <Auth/> */}
    </nav>
  );
}

export default Navbar;
