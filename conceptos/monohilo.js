console.log('Primera sentencia');

let i = 0;
setInterval(() => {
  console.log(i);
  
  // El monohilo nos indicia que tenemos que tener cuidado al diseñar la apliación ya que debemos
  // de cuidar todos los puntos de seguiridad, es decir, validar todo lo que se tenga que validar
  // ya que de lo contrario la apliación se romperá y provocar un desastre.
  try {
    if (i === 3) {
      throw new Error('Error forzado');
    }
  } catch (error) {
    console.log(error.message);
  }

  i++;
}, 1000);

console.log('Segunda sentencia');