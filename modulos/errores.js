function otraFuncion() {
  try {
    serompe();
  } catch (error) {
    console.error('vaya, algo se ha roto dentro de otra Funcion...');
    console.error(error);
    console.log('pero no pasa nada, ya que lo hemos captudrado');
  }
  serompe;
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return z + 3;
    } catch (error) {
      console.log('Ups, se rompio la funcion asincrona')
      cb(error);
    }
  }, 1000);
}

try {
  seRompeAsincrona((err) => {
  console.error(err.message);
  });
} catch (error) {
  console.error('vaya, algo se ha roto ...');
  console.error(error.message);
  console.log('pero no pasa nada, ya que lo hemos captudrado');
}

console.log('esto de aqui está al final');