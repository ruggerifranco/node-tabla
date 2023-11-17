const fs = require('fs')
require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';


        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar === true) {

            console.log('==================='.green)
            console.log('  TABLA DEL: '.green, base)
            console.log('==================='.green)

            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`.rainbow

    } catch (error) {

        throw error;
    }

}

module.exports = {
    crearArchivo
}