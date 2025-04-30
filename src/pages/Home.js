import React, { useState } from 'react';
import background from '../images/back.jpg';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  const [showTerms, setShowTerms] = useState(false);

  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  };

  const footerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '1.5rem',
    textAlign: 'center',
    borderTop: '1px solid #ccc',
    width: '100%',
  };

  const iconStyle = {
    margin: '0 10px',
    fontSize: '1.5rem',
    color: '#555',
  };

  return (
    <>
      <section style={sectionStyle}>
        {/* <h1
          style={{
            color: '#d6f0ff',
            fontSize: '4rem',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            textShadow: '2px 2px 5px rgba(165, 82, 243, 0.7)',
            letterSpacing: '2px',
            margin: 0,
          }}
        >
          Welcome To Purplle Comestics
        </h1> */}
      </section>

      <footer style={footerStyle}>
        <div style={{ marginBottom: '10px' }}>
          <Link to="/faq" style={{  margin: '0 15px', color: 'blue', textDecoration: 'underline', cursor: 'pointer' 
            }}>
                FAQs
        </Link>
        <Link to="/contact" style={{ margin: '0 15px', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
        Contact Us
        </Link>
        <span
            onClick={() => setShowTerms(true)}
            style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline', marginLeft: '15px' }}
          >
            Terms & Conditions
          </span>
        </div>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={iconStyle}><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={iconStyle}><FaTwitter /></a>
        </div>
        <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '10px' }}>© 2025 Grace Glam. All rights reserved.</p>
      </footer>

      {showTerms && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1000',
          }}
        >
          <div
  style={{
    background: 'linear-gradient(135deg, #ff85a2, #d885ff, #85c1ff)',
    padding: '30px',
    borderRadius: '15px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  }}
>
  <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Terms & Conditions</h3>
  <p style={{ marginBottom: '10px' }}>
    By using our services, you agree to comply with our terms and conditions.
  </p>
  <p style={{ marginBottom: '10px' }}>
    All products are subject to availability. We reserve the right to modify or
    discontinue services without notice.
  </p>
  <p style={{ marginBottom: '10px' }}>
    Returns and exchanges are allowed within 7 days of purchase if the product
    is unused and sealed.
  </p>
  <p style={{ marginBottom: '20px' }}>
    Your privacy is important to us. Please read our privacy policy for more
    information.
  </p>
          <button
          onClick={() => setShowTerms(false)}
          style={{
            background: '#ff85a2',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          }}
          >
          Close
            </button>
            </div>

          </div>
            )}
    </>
  );
}

export default Home;
