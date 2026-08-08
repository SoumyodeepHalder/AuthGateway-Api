const express = require('express');
const router = express.Router();
const User = require('./model');

// CREATE: Register a new user
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: { id: newUser._id, username: newUser.username } });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// READ: Login (Verify user details)
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', userId: user._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/login', async (req, res) => {
    res.status(200).json({ message: 'Login successful'});
});

// READ: Get user profile details
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE: Update user credentials
router.put('/user/:id', async (req, res) => {
    try {
        const { username, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { username, password }, 
            { new: true, runValidators: true }
        ).select('-password');
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE: Remove a user account
router.delete('/user/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
