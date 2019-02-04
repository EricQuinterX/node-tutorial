const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'e';

crearArchivo(base)
  .then(archivo => console.log(`Se creo el archivo ${archivo}`))
  .catch(err => console.log(err));

// console.log(crearArchivo);