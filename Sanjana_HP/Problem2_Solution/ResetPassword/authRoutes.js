// routes/authRoutes.js

router.post('/reset-password', async (req, res) => {
    try {
      const { otp, newPassword, confirmPassword } = req.body;
      // Validate OTP and passwords
      // Implementation of OTP verification and password reset logic is out of the scope of this example
      res.json({ message: 'Password reset successfully' });
    } catch (error) {
      console.error('Reset Password Error:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  