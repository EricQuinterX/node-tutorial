/**
 * Async Await
**/

// let getNombre = () => {
//   return 'Eric';
// };

// let getNombre = async() => {

//   throw new Error('No existe un nombre para ese usuario');

//   return 'Eric';
// };

let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve('Eric');
    }, 3000);
  });
}

let saludo = async () => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
}


// console.log(getNombre());

// getNombre().then(name => {
//   console.log(name);
// }).catch(e => {
//   console.log('Error de ASYNC', e)
// });

saludo().then(message => {
  console.log(message);
}).catch(e => {
  console.log('Error de ASYNC', e)
});
