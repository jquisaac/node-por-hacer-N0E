const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea en base a la descripcion', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}