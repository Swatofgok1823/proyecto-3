//paquete importado
require('colors');

//referencia el modulo math a traves de la constante math
const math = require('./modules/math.js')


console.log(math);

const main = async() => {
    console.log('*******************************'.green);
    console.log('*   '.green,'Funciones matematicas'.bgGreen,
                '   *'.green);
    console.log('*******************************\n'.green);
    console.log('*********************************'.cyan);
    console.log('* '.red + math.add(5,3) + '                             *'.red );
    console.log('* '.red +math.substract(5,3)+ '                             *'.red);
    console.log('* '.red +math.multiply(5,3)+ '                            *'.red);
    console.log('* '.red +math.divide(5,3)+ '            *'.red);

    console.log('*********************************'.red);
}
console.clear();
main();
