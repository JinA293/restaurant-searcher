import React from 'react';
import Area from './components/Header'
import Station from './components/Header'
import Location from './components/Header'

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";// import Main from './Main';
// import Footer from './Footer';

export default function App() {
  return (
    <>
      
      <BrowserRouter>
        <div className="App">
          <Link to="/">to top</Link>
          <br />
          <Link to="/company">to company</Link>
          <br />
          <Link to="/contact">to contact</Link>

          <Routes>
            <Route path="/" element={<Location />} />
            <Route path="company" element={<Station />} />
            <Route path="contact" element={<Area />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
);
}