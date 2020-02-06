function hola(name, callback) {
  setTimeout(() => {
    console.log(`Hola ${name}`);
    callback(name);
  }, 1000);
}

function adios(name, callback) {
  setTimeout(() => {
    console.log(`Adios ${name}`);
    callback();
  }, 1000);
}

function hablar(callback) {
  setTimeout(() => {
    console.log('Bla bla bla...');
    callback();
  }, 1000);
}

function conversacion(name, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      veces--;
      conversacion(name, veces--, callback)
    });
  } else {
    adios(name, callback);
  }
}


console.log('Iniciando conerversación ...');

hola('Luis', (name) => {
  conversacion(name, 6, () => {
    console.log('Terminando conerversación');
  });
});

//Callback Hell
// hola('Luis', (name) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         hablar(() => {
//           adios(name, () => {
//             console.log('Terminando conerversación ...');
//           });
//         });
//       });
//     });
//   });
// });