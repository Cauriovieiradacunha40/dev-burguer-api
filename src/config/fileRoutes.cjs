
const {resolve} = require('node:path');
const Express = require('express');

const uploadPath = (resolve(__dirname, '..', '..', 'uploads'));  

const fileRoutesConfig = Express.static(uploadPath); 

module.exports = fileRoutesConfig; 



