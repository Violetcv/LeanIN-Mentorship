import React from 'react';
import Jumbotron from '../components/jumbotron';
import Counter from '../components/counter';

function Home() {
  return (
    <div className="home">
        <Jumbotron/>
        <Counter/>
    </div>
  );
}

export default Home;
