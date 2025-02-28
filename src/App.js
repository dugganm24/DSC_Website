import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import Gallery from './components/pages/Gallery';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/about-us' Component={AboutUs} />
      <Route path='/services' Component={Services} />
      <Route path='/gallery' Component={Gallery} />
      <Route path='/contact-us' Component={ContactUs} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
