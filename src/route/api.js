import express from 'express';
import { verifyIdToken } from './authMiddleware.js'; // Middleware custom

const router = express.Router();

// Endpoint public
router.get('/public', (req, res) => {
  res.send('Endpoint public accessible sans authentification.');
});

// Endpoint protégé
router.get('/protected', verifyIdToken, (req, res) => {
  res.send('Endpoint protégé, vous êtes authentifié.');
});

export default router;