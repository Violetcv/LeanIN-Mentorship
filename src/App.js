import './App.css';
import { Auth } from'./components/auth';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
// import SignIn from './pages/signin.js';
import About from './pages/about.js';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  // <BrowserRouter>

    <div className="App">
      <Navbar/>
{/* <Routes> */}
      {/* Route for Sign In Page */}
      {/* <Route path="/signin" component={SignIn}><SignIn/></Route> */}

      {/* Route for About Page */}
      {/* <Route path="/about" component={About}><About/></Route> */}
      {/* </Routes> */}
      <Jumbotron/>
    </div>
    // </BrowserRouter>
  );
}

export default App;
