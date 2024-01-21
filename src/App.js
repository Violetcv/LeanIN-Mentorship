import "./App.css";
// import { Auth } from'./components/auth';
import Navbar from "./components/navbar";
import SignIn from './pages/signin.js';
import About from './pages/about.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home.js";
import Flower from "./pages/flower.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/flowers" element={<Flower/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
