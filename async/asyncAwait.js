async function hola(name) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log(`Hola ${name}`);
        resolve(name);
      }, 1000);
    } catch (error) {
      reject('Hubo un error en hola');
    }
  });
}

async function adios(name) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log(`Hola ${name}`);
        resolve(name);
      }, 1000);
    } catch (error) {
      reject('Hubo un error en hola');
    }
  });
}

async function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla...');
      resolve();
    }, 1000);
  });
}
async function main() {
  console.log('Inicio de la conversación');
  console.log('Inicio 1');
  console.log('Inicio 2');
  console.log('Inicio 3');
  console.log('Inicio 4');
  try {
    let name = await hola('Luis');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(name);
    console.log('Fin de la conversación');
  } catch (error) {
    console.log(error);
  }
}

function main2() {
  console.log('main2');
}

function main3() {
  console.log('main3');
}

function main4() {
  console.log('main4');
}

function main5() {
  console.log('main5');
}

main();
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
main2();
main3();
main4();
main5();