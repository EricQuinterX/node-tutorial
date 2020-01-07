let empleados = [
    { id: 1, nombre: 'Fernando' },
    { id: 2, nombre: 'Melissa' },
    { id: 3, nombre: 'Eric' }
];

let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(e => e.id === id);
    if (!empleadoDB) {
        callback(`No existe un empleado con id: ${id}.`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(s => s.id === empleado.id);
    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
};

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(resp);
            console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
        }
    })
});

// getSalario({ id: 5, nombre: 'Fernando' }, (err, salario) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(salario);
//     }
// });