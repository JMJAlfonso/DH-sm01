const fs = require('fs');

const stockFIle = fs.readFileSync(__dirname + '/bicicletas.json','utf-8');

const stockBicicletas = JSON.parse(stockFIle);

module.exports = stockBicicletas;

