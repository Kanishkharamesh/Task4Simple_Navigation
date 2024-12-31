/* import './App.css'
function App() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
 */
/* import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from './Contactus';

function App() {
  return (
    <Router>
      <div>
        <Dashboard />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;