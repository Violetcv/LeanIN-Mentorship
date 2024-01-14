import React from 'react';
// import Counter from './counter';
import './jumbotron.css';

function Jumbotron() {

  function handleClick() {
    alert('Button Clicked!');
  }

  return (
    <div className="jumbotron">
      <div className='container-jumbotron'>
      <h1>Welcome to My React App</h1>
      <p>This is a Basic Jumbotron. You can personalize it <strong>however</strong> you want!</p>
      <p>This is a simple React app with a navbar, jumbotron, sign-in (using Firebase), and about pages.</p>
      <button className='pretty-button' onClick={handleClick}>Click Me!</button>
      </div>
  </div>
  );
}

export default Jumbotron;
