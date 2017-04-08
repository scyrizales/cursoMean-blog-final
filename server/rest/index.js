var express = require('express');
var rest = express();
var authCheck = require('./../lib/authCheck');

rest.use('/session', require('./sessionRest'));
rest.use(authCheck);
rest.use('/usuario', require('./usuarioRest'));
rest.use('/entrada', require('./entradaRest'));
rest.use('/comentario', require('./comentarioRest'));

module.exports = rest;