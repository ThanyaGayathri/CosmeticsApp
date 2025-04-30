import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();  // Initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save message to localStorage
    const existingMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    const updatedMessages = [...existingMessages, form];
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));

    alert('Message sent! Thank you for contacting us.');

    // Redirect to home page after the message is sent
    navigate('/');  // This will navigate to the home page

    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #fce4ec, #e1bee7)',
        minHeight: '100vh',
        padding: '50px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ color: '#ab47bc', marginBottom: '20px', textAlign: 'center' }}>
          Contact Purplle Support
        </h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            style={{ ...inputStyle, resize: 'none' }}
          />

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  marginTop: '15px',
  color: '#6a1b9a',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: '#d81b60',
  color: '#fff',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '10px',
  marginTop: '20px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
};

export default ContactPage;
