'use strict'

const axios = require('axios');

const IBGE = {};

IBGE.getCode = async (uf, city) => {
    let distritos = null;

    if(uf.length !== 2)
        uf = getUF(uf);

    const res = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`)
    
    if(!res.data)
        throw 'cant find ibge code' + res;

    distritos = res.data;

    let _distrito = null;
    for (const distrito of distritos) {
        
        //se encontrar nome da cidade informada como distrito
        if(distrito.nome && distrito.nome == city){
            _distrito = distrito.municipio.id;
        }

        if(distrito.municipio && distrito.municipio.nome == city)
            return distrito.municipio.id
            
    }
    if(!_distrito)
        throw 'cant find ibge code'

    return _distrito;

}

module.exports = IBGE;