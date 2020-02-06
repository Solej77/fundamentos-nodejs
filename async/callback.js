// function soyAsincrona(callback) {
//   console.log('Soy una función Asincrona');
//   setTimeout(() => {
//     console.log('Estoy siendo asincrona');
//     callback();
//   }, 1000);
// }



// soyAsincrona(function() {
  //   console.log('Terminando Proceso ...');
  // });
  
  
function hola(name, callback) {
  setTimeout(() => {
    console.log('Hola ' + name);
    callback(name);
  }, 1500);
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    callback();
  }, 1000);
}

console.log('Iniciando conversación ...');

hola('Luis', function (nombre) {
  adios(nombre, function () {
    console.log('Fin de la conversación');
  });
});
