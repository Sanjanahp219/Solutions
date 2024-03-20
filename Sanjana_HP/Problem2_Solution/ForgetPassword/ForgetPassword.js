// ForgetPassword.js

import React, { useState } from 'react';

const ForgetPassword = () => {
  const [formData, setFormData] = useState({ email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to send OTP
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle OTP sent successfully
      console.log('OTP Sent:', data);
    } catch (error) {
      console.error('Forgot Password Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
