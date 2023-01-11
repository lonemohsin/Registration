// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes,Route, NavLink} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import './App.css';


function App() {
  return (
    <div className='App'>
     
    <Router>
    <div className='navbar'>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
