var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./database/conexion');

var rest = require('./rest');

app.use('/api', rest);

app.listen(8080);