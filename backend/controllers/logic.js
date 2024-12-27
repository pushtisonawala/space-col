const userModel = require('../models/User');
const bcrypt = require('bcrypt');

// Signup Function
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User  already exists. Please login.', success: false });
        }

        // Create a new user and hash the password
        const newUser  = new userModel({ name, email, password });
        newUser .password = await bcrypt.hash(password, 10);
        await newUser .save();

        res.status(201).json({ message: 'Signup successful!', success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong.', success: false });
    }
};

// Login Function
// Login Function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User  does not exist. Please sign up.', success: false });
        }

        // Compare the entered password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.', success: false });
        }

        // Optionally, generate a token here (e.g., JWT) and send it back
        res.status(200).json({ message: 'Login successful!', success: true, name: user.name }); // Include the player's name
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong.', success: false });
    }
};

module.exports = { signup, login };