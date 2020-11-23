# IBGE Toolkit

Módulo de Node.js que fornece dados da API IBGE

- [x] Busca código IBGE por Município/Cidade
- [ ] Lista Municípios/Cidades de um Estado

## Instale
`npm install ibge`

## Use
```javascript
var ibge = require('ibge')

// Retorna '3536505'
var codigo = ibge('São Paulo', 'Paulínia')
```
