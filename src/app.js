import express from 'express';
import cors from 'cors';
import path from 'path';
import apiRoutes from './route/api.js'; // Importation des routes

const app = express();
app.use(cors());
app.use(express.json());

// Servir le frontend
app.use(express.static('public'));

// Utilisation des routes
app.use('/api', apiRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
