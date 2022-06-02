import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// import models
import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "such User doen't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(404).json({ message: "Invalid password Credientail." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.USER_JWT_SECRET, { expiresIn: "24h" });

        // localStorage.setItem("isAuthenticated", "true");

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User email already exist, pls register with another email" });

        if(password !== confirmPassword)  return res.status(400).json({ message: "Passwords dont match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.USER_JWT_SECRET, { expiresIn: "24h" });

        // localStorage.setItem("isAuthenticated", "true");

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}