import express from 'express';
import { addAstrologer, assignUser, toggleTopAstrologer } from '../controllers/astrologerController.mjs';

// Create a router instance
const router = express.Router();

router.post('/createastrologer', addAstrologer);
router.post('/assignUser', assignUser);
router.put('/toggleTopAstrologer/:astrologerId', toggleTopAstrologer);

export default router;