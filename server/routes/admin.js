import express from 'express';
import { signin, signup, getUsers, deleteUser } from '../controllers/admin.js';

const router = express.Router();

// get request to get admin
router.post('/signin', signin);

// get request to get admin
router.post('/signup', signup);

// get request to get a user
router.get('/', getUsers);

// get request to get a user
router.delete('/:id', deleteUser);

export default router;