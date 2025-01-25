import express from 'express';
import { getAadharWithUser } from '../controllers/aadharController';

const router = express.Router();

router.get('/aadharcards/:id', getAadharWithUser);

export default router;