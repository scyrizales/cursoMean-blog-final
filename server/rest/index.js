var express = require('express');
var rest = express();

rest.use('/usuario', require('./usuarioRest'));

module.exports = rest;