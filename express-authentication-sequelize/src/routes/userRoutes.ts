import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  deleteAllUsers,
  login,
} from '../controller/userController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/users', createUser);
router.post('/users/login', login);
router.get('/users', authenticateToken, getAllUsers);
router.get('/users/:id', authenticateToken, getUserById);
router.patch('/users/:id', authenticateToken, updateUser);
router.delete('/users/:id', authenticateToken, deleteUser);
router.delete('/users', authenticateToken, deleteAllUsers);

export default router;
