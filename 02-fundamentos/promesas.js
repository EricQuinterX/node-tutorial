let empleados = [
    { id: 1, nombre: 'Fernando' },
    { id: 2, nombre: 'Melissa' },
    { id: 3, nombre: 'Eric' }
];

let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 }
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(e => e.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con ID ${id}.`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(s => s.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
};


// getEmpleado(5).then(empleado => {
//     return getSalario(empleado)
// })
// .then(resp => {
//     console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
// })
// .catch(err => {
//     console.log(err);
// });
getEmpleado(1)
    .then(empleado => getSalario(empleado))
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    });