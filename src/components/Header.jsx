// src/components/Header.js
import React, { useState } from 'react';
import '../components/Header.css';
import Navbar from './Navbar';  // Import Navbar component
import AboutOffCanvas from './AboutOffCanvas';

function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div>
      {/* Top Offer Banner */}
      <div className="top-banner">
        <span>⭐ FLAT Rs. 100 OFF on your first order! ⭐</span>
        <button className="download-btn" onClick={() => alert("App downloaded successfully!")}>
         Download App
        </button>

      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="left-section">
          <img src="/images/logo.jpg" alt="logo" width="60" height="60" />
          <h2 className="brand-name">Purplle Cosmetics</h2>
        </div>


        {/* <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <button>🔍</button>
        </div> */}

        <div className="right-section">
          <span>Support</span>
          <span>Track Order</span>
          <span
            onClick={() => setAboutOpen(true)}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            About Us
          </span>
          <span>❤️ 🛒 😊</span>
        </div>
      </div>

      {/* Navbar Component */}
      <Navbar />  {/* Include Navbar here */}

      {/* About Us OffCanvas */}
      <AboutOffCanvas isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  );
}

export default Header;
