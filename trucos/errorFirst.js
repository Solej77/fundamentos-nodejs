function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

// Opcion 1 para manejar error
asincrona((err, data) => {
  if(err) {
    console.error('Tenemos un error');
    console.error(err);
    return false;
  }

  console.log('Todo a ido bien, mi data es: ' + data);
});



// Opción 2, esta manera es como se manejan las funciones sincronas, por que el throw error no va afuncionar, ya que al ser una funcion asincrona pasa al thred pool pór que se pierde del hilo principal, por lo tanato todas las funciones asincronas se deben de trabajar bajo el patron Error First Callback parara todas las funciones asincronas y los callbacks
/*
try {
  asincrona((err, data) => {
    if(err) {
      throw err;
    }
    console.log('Todo a ido bien, mi data es: ' + data);
  });
} catch (error) {
  console.log('Hemos campturado el error');
}
*/
