const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  const url = req.url;
  console.log(`Nueva petición a: ${url}`);

  switch (url) {
    case '/new-hola':
      let saludo = hola();
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.write(saludo);
      break;
  
    default:
      res.write('Error 404: Not Found');
      break;
  }
  res.end();
}

function hola() {
  return 'Hola que tal';
}

console.log('Escuchando http en el puerto 3000');
