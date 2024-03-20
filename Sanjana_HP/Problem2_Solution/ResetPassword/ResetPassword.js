// ResetPassword.js

import React, { useState } from 'react';

const ResetPassword = () => {
  const [formData, setFormData] = useState({ otp: '', newPassword: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to reset password
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle password reset success
      console.log('Password Reset:', data);
    } catch (error) {
      console.error('Password Reset Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder="OTP" required />
        <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} placeholder="New Password" required />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
