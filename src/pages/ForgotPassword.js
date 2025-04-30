import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Reuse the existing CSS

function ForgotPassword() {
  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Enter your email" /><br />
      <button>Reset Password</button><br />
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default ForgotPassword;
