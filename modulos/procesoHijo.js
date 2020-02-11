// Sintaxis de ES6 Dtestructurar un objeto
const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

// exec('node modulos/consola.js', (err, stdout, stderr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }
  
//   console.log(stdout);
// });



// Es por eso que puede Node JS esta orientado a eventos, ya que tiene la vcapacidad de escuchar eventos de proceso.
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
  console.log('¿Esta muerto?');
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on('exit', () => {
  console.log('el proceso a terminado');
});