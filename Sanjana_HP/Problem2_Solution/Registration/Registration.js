// Registration.js

import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({ email: '', phone: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to register user
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle successful registration
      console.log('Registration Successful:', data);
    } catch (error) {
      console.error('Registration Error:', error);
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>Register Now</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default Registration;
