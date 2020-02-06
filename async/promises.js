function hola(name) {
  return new Promise((resolve, reject) => {
    try {
      // throw new Error('Error en hola');
      setTimeout(() => {
        console.log(`Hola ${name}`);
        resolve(name);
      }, 1000);
    } catch (error) {
      reject(error.message);
    }
  });
}

function adios(name) {
  return new Promise((resolve, reject) => {
    try {
      // throw new Error('Error en adios');
      setTimeout(() => {
        console.log(`Adios ${name}`);
        resolve()
      }, 1000);
    } catch (error) {
      reject(error.message);
    }
  });
}

function hablar(name) {
  return new Promise((resolve, reject) => {
    try {
      // throw new Error('Error en hablar');
      setTimeout(() => {
        console.log(`Bla bla bla bla ...`);
        resolve(name)
      }, 1000);
    } catch (error) {
      reject(error.message);
    }
  })
}


console.log('Iniciando la conversación');

hola('Luis')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log('Fin de la conversación');
  })
  .catch(error => {
    console.log(error);
  });
