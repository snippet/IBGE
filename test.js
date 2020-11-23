const IBGE = require('./index');
const Helper = require('./helper');

(async function thename(){

    console.log(
        await IBGE.getCode('RJ', 'Barcelos')
    );

}());