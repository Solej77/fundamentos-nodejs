process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Proceso terminado');
  // Esto es lo ultimo que se va a hacer
});

process.on('uncaughtException', (err, origen) => {
  console.log('Vaya, se nos ha olvidado capturar un erorr');
  console.error(err);
});

funcionQueNoExiste();
console.log('Si el error no se recoge, no sale esta leyenda');
