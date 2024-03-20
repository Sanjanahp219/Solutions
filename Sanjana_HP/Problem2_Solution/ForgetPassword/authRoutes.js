// routes/authRoutes.js

router.post('/forgot-password', async (req, res) => {
    try {
      const { email } = req.body;
      // Generate and send OTP
      // Implementation of sending OTP via email is out of the scope of this example
      res.json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error('Forget Password Error:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  