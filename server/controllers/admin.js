import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// import models
import Admin from '../models/admin.js';
import UserDetail from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });

        if(!existingAdmin) return res.status(404).json({ message: "Admin doen't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingAdmin.password);

        if(!isPasswordCorrect) return res.status(404).json({ message: "Invalid Credientails." });

        const token = jwt.sign({ email: existingAdmin.email, id: existingAdmin._id }, process.env.ADMIN_JWT_SECRET, { expiresIn: "24h" });

        res.status(200).json({ result: existingAdmin, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });

        if(existingAdmin) return res.status(400).json({ message: "Admin email already exist." });

        if(password !== confirmPassword)  return res.status(400).json({ message: "Passwords dont match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Admin.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.ADMIN_JWT_SECRET, { expiresIn: "24h" });  

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const getUsers = async (req, res) => {
    try {
        const userDetails = await UserDetail.find();

        res.status(200).json(userDetails)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');

        await UserDetail.findByIdAndRemove(id);

        res.json({ message: 'User Deleted Successfully' });
}