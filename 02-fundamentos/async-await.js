/**
 * Async Await
**/

// let getNombre = () => {
//   return 'Eric';
// };

let getNombre = async() => {
  // undefined.asd;
  return 'Eric';
};

// console.log(getNombre());
getNombre().then(nombre => {
  console.log(nombre);
})
.catch(e => {
  console.log('Error Node', e);
});