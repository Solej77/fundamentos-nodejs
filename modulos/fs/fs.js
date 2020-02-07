const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, data, cb) {
  fs.writeFile(ruta, data, (err)=> {
    if (err) {
      cb(`Hubo un error al escribir: ${err}`);
    } else {
      cb('Se escribio correctamente');
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// escribir(`${__dirname}/archivo1.txt`, 'Hola soy Solej77', console.log);
// leer(`${__dirname}/archivo1.txt`, console.log);
borrar(`${__dirname}/archivo1.txt`,(err) => {
  if (!null) {
    console.log('Se a borrado exitosamente');
  } else {
    console.log(null);
  }
});