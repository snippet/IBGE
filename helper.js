'use strict'

const Helper = {};

Helper.getUF = (state) => {
	state = Helper.normalizar(state)
    return Helper.states[state];
}

// Remove acentos, coloca tudo em caixa alta e remove outros caracteres
Helper.normalizar = (str) => {
	return String(str).replace(/[áàãâäÁÀÃÂÄ]/g, 'A')
		.replace(/[éèêëÉÈÊË]/g, 'E')
		.replace(/[íìîïÍÌÎÏ]/g, 'I')
		.replace(/[óòõôöÓÒÕÔÖ]/g, 'O')
		.replace(/[úùûüÚÙÛÜ]/g, 'U')
		.replace(/[ñÑ]/g, 'N')
		.replace(/[çÇ]/g, 'C')
		.toUpperCase()
		.replace(/[^A-Z]/g, '')
}

Helper.states = {
	'ACRE': 'AC',
	'ALAGOAS': 'AL',
	'AMAPA': 'AP',
	'AMAZONAS': 'AM',
	'BAHIA': 'BA',
	'CEARA': 'CE',
	'DISTRITOFEDERAL': 'DF',
	'ESPIRITOSANTO': 'ES',
	'GOIAS': 'GO',
	'MARANHAO': 'MA',
	'MATOGROSSO': 'MT',
	'MATOGROSSODOSUL': 'MS',
	'MINASGERAIS': 'MG',
	'PARANA': 'PR',
	'PARAIBA': 'PB',
	'PARA': 'PA',
	'PERNAMBUCO': 'PE',
	'PIAUI': 'PI',
	'RIOGRANDEDONORTE': 'RN',
	'RIOGRANDEDOSUL': 'RS',
	'RIODEJANEIRO': 'RJ',
	'RONDONIA': 'RO',
	'RORAIMA': 'RR',
	'SANTACATARINA': 'SC',
	'SERGIPE': 'SE',
	'SAOPAULO': 'SP',
	'TOCANTINS': 'TO'
}

module.exports = Helper;