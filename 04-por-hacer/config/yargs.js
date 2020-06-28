const descripcion = {
    demand: true, 
    alias: 'd', 
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    demand: true, 
    alias: 'c', 
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion 
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea específica', {
        descripcion
    })
    .help()
    .argv;

module.exports = { argv };