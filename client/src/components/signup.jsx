import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous error and success messages
    setError(null);
    setSuccess(null);

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Backend API call to signup endpoint
      const response = await axios.post('http://localhost:2024/career/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      // Handle success response
      setSuccess('User registered successfully!');
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });

      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (err) {
      // Handle error from API
      const errorMessage = err.response?.data?.message || 'Error signing up. Please try again.';
      setError(errorMessage);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-welcome">
        <h1>Welcome</h1>
        <h1>to</h1>
        <h1>Career Assessment Tool</h1>
        <h1>Sign Up</h1>
      </div>

      <div className="signup-form-section">
        <h2 className="signup-heading">Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Set your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Display error message */}
          {error && <div className="error-message">{error}</div>}

          {/* Display success message */}
          {success && <div className="success-message">{success}</div>}

          <button type="submit" className="signup-btn">SIGN UP</button>

          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
