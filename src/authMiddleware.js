const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token requis' });
    }
    const token = authHeader.split(' ')[1]; // Prend le token après "Bearer"
    try {
      const decodedToken = await getAuth().verifyIdToken(token);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(403).json({ message: 'Token invalide', error: error.message });
    }
  };
  