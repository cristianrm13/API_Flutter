const express = require('express');
const cors = require('cors'); // Para permitir las solicitudes desde tu app Flutter

const app = express();

// Middleware para permitir CORS (importante si haces peticiones desde Flutter)
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET de ejemplo
app.get('/api/nombres', (req, res) => {
  res.json({
    message: 'Lista de nombres obtenida con éxito',
    nombres: ['Juan', 'Maria', 'Carlos']
  });
});

// Ruta POST de ejemplo (opcional)
app.post('/api/nombres', (req, res) => {
  const { name } = req.body;
  res.json({
    message: `Nombre ${name} recibido con éxito`,
    nombre: name
  });
});

// Puerto dinámico proporcionado por Railway o puerto 3000 si está corriendo localmente
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
