import express from 'express';
import { createUser } from '../controllers/userController.mjs';

// Create a router instance
const router = express.Router();

router.post('/createuser', createUser)

export default router;