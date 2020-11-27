'use strict'

const axios = require('axios');
const Helper = require('./helper');

const IBGE = {};

IBGE.getCode = async (uf, city) => {
    let distritos = null;

    if(uf.length !== 2)
        uf = Helper.getUF(uf);

    const res = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`)
    
    if(!res.data)
        throw 'cant find ibge code' + res;

    distritos = res.data;

    let _distrito = null;
    for (const distrito of distritos) {

        //Normaliza nomes
        distrito.nome = Helper.normalizar(distrito.nome);
        distrito.municipio.nome = Helper.normalizar(distrito.municipio.nome);
        city = Helper.normalizar(city);
        
        //se encontrar nome da cidade como distrito salva ibge cod do respectivo municipio.
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