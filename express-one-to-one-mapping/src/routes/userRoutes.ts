import express from 'express';
import { createUser, getUserWithAadhar } from '../controllers/userController';

const router = express.Router();

router.post('/users', createUser);
router.get('/users/:id', getUserWithAadhar);

export default router;