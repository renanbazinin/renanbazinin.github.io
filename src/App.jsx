import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import './App.css';

function App() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">RB</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/timeline" className={isActive('/timeline') ? 'active' : ''}>Timeline</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About Me</Link></li>
          </ul>
          <button className="mobile-menu-btn">☰</button>
        </div>
      </nav>

      <main className="content">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </motion.div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Renan Bazinin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
