import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* <h1>My React App</h1> */}
      <div className='elements'>
    <a href="/"><button>Home</button></a>
    <a href="/about"><button>About</button></a>
    <a href="/signin"><button>Sign In</button></a>
    <a href="/flowers"><button>Flowers</button></a>
    </div>
    </nav>
  );
}

export default Navbar;
