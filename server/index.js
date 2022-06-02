import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import adminRoutes from './routes/admin.js';
import userRoutes from './routes/users.js';

// Initialize packages
const app = express()

dotenv.config();

// body parser middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routing middleware
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

app.listen(PORT, console.log(`howdy developer, Server running on port ${PORT}`))


async function connectDB() {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

connectDB();
