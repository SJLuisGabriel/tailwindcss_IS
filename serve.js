const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Lee el archivo index.html
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error reading index.html');
      return;
    }

    // Establece el encabezado de la respuesta
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Envía el contenido del archivo HTML como respuesta
    res.end(data);
  });
});

// Escucha en el puerto 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
