import React from 'react';
import './AboutOffCanvas.css';

function AboutOffCanvas({ isOpen, onClose }) {
  return (
    <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
      <div className="offcanvas-header">
        <h2>About Purplle</h2>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
      <div className="offcanvas-content">
        <p><strong>Welcome to Purplle – Your Beauty Wonderland!</strong></p>
        <p>
          Dive into a vibrant world of premium cosmetics, skincare, and wellness, 
          carefully crafted to bring out the best in you. Our wide range of products 
          caters to all skin tones and types—because beauty is for everyone.
        </p>
        <p>
          With a perfect blend of quality, affordability, and fun, 
          Purplle is here to make your self-care rituals feel magical. ✨
        </p>
        <p><em>Glow confidently. Live beautifully. Shop Purplle.</em></p>
      </div>
    </div>
  );
}

export default AboutOffCanvas;
