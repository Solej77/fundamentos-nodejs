console.log('log');

console.info('info');

console.warn('warn');

console.error('error');

var table = [
  {
    id: 1,
    b: 'Pepe',
  },
  {
    id: 2,
    b: 'Solej77',
  },
  {
    id: 3,
    z: 'Luis García',
  },
];
console.table(table);

for (let i = 0; i < 5; i++) {
  console.count('iteracion');
}


function f1() {
  console.group('Inicio F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  f2();
  
  console.groupEnd('Inicio F1');
}

function f2() {
  console.group('Inicio F2');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F1');
  console.log('Dentro de F2');
  console.groupEnd('Inicio F2');
}

f1();