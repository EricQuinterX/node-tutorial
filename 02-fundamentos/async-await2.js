let empleados = [
  { id: 1, nombre: 'Fernando' },
  { id: 2, nombre: 'Melissa' },
  { id: 3, nombre: 'Eric' }
];

let salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 }
];

let getEmpleado = async (id) => {  
    let empleadoDB = empleados.find(e => e.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con ID ${id}.`);
    } else {
        return empleadoDB;
    }
};

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(s => s.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

let getInformacion = async(id) => {
  let empleado = await getEmpleado(id);
  let resp = await getSalario(empleado);

  return `${resp.nombre} tiene un salario de $${resp.salario}`
}

getInformacion(3)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));