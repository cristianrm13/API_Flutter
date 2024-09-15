const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar el body como JSON
app.use(express.json());

// Simulamos una base de datos con un arreglo
let nombres = ['Juan', 'Maria', 'Carlos'];

// Ruta POST para agregar un nombre
app.post('/api/nombres', (req, res) => {
  const { name } = req.body;

  if (name) {
    nombres.push(name); // Agregar el nombre al arreglo
    res.status(201).json({
      message: `Nombre recibido: ${name}`,
      nombres, // Devolvemos la lista actualizada
    });
  } else {
    res.status(400).json({ message: 'Nombre no proporcionado' });
  }
});

// Ruta GET para obtener la lista de nombres
app.get('/api/nombres', (req, res) => {
  res.status(200).json({
    message: 'Lista de nombres obtenida con éxito',
    nombres, // Devolvemos la lista de nombres
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
