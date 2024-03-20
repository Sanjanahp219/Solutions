// Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ emailOrPhone: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to authenticate user
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle authentication success, set JWT token in local storage, redirect to dashboard
      localStorage.setItem('token', data.token);
      history.push('/dashboard');
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="emailOrPhone" value={formData.emailOrPhone} onChange={handleChange} placeholder="Email or Phone Number" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
