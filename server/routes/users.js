import express from 'express';
import { signin, signup } from '../controllers/user.js'

const router = express.Router();

// post request to login a user
router.post('/signin', signin);

// post request for creating a user
router.post('/signup', signup);

export default router;