import express from 'express';
import { getAuth } from 'firebase-admin/auth';

const router = express.Router();

// Route publique accessible sans authentification
router.get('/public', (req, res) => {
  res.json({ message: 'Ceci est un endpoint public accessible sans authentification.' });
});

// Middleware de vérification du token
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Token requis' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = await getAuth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token invalide', error: error.message });
  }
};

// Route protégée nécessitant un token valide
router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Accès accordé à un endpoint protégé.', user: req.user });
});

export default router;
