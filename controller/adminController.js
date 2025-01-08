const User = require('../models/user');

// Create a user (student or teacher)
exports.createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!['student', 'teacher'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role specified' });
    }

    const user = new User({ username, email, password, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};
