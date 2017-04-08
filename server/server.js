var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({ 
    secret: 'BlogFinalMEAN', 
    resave: false, 
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
}));
app.use(bodyParser.json());

require('./database/conexion');

var rest = require('./rest');

app.use('/api', rest);

app.listen(8080);