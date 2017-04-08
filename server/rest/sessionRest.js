var cbs = require('./../lib/callbacks');
var express = require('express');
var usuarioRest = express();
var usuarioModelo = require('./usuarioModelo');

usuarioRest.post('/registrar', function(req, res) {
    usuarioModelo.crear(req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

usuarioRest.post('/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    usuarioModelo.listar({ email: email, password: password })
        .then(function (usuarios) {
            if (usuarios && usuarios.length) {
                req.session.authenticated = true;
                req.session.usuario = usuarios[0];
                res.json(usuarios[0]);
            } else {
                cbs.devolerError(res, 401)({
                    msg: 'Usuario invalido'
                });
            }
        }, cbs.devolerError(res, 500));
});

usuarioRest.post('/logout', function(req, res) {
    req.session.authenticated = false;
    delete req.session.usuario;
    res.json({ msg: 'ok' });
});

module.exports = usuarioRest;