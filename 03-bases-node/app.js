const argv = require('yargs')
        .command('listar', 'Imprime en consola la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
        .help()
        .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

console.log('Limite', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(process.argv);
// console.log(base * 2);

// crearArchivo(base)
//     .then(archivo => console.log(`Se creo el archivo ${archivo}`))
//     .catch(err => console.log(err));


