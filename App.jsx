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
