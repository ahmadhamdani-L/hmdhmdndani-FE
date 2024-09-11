import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Pastikan path sesuai
import Register from './Register'; // Pastikan path sesuai
import Dashboard from './Dashboard'; // Pastikan path sesuai
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CallToAction from './CallToAction';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar di luar Routes untuk muncul di semua halaman */}
        <header className="App-header">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <FeaturesSection />
                  <CallToAction />
                  <Footer />
                </>
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
