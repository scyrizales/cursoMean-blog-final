var cbs = require('./../lib/callbacks');
var express = require('express');
var entradaRest = express();
var entradaModelo = require('./entradaModelo');

entradaRest.get('', function(req, res) {
    entradaModelo.listar()
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

entradaRest.get('/:id', function(req, res) {
    entradaModelo.listar({ _id: req.params.id })
        .then(function (entradas) {
            if (entradas && entradas.length) {
                res.json(entradas[0]);
            } else {
                res.json(null);
            }
        }, cbs.devolerError(res, 500));
});

entradaRest.post('', function(req, res) {
    req.body.autor = req.session.usuario._id;
    entradaModelo.crear(req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

entradaRest.put('/:id', function(req, res) {
    entradaModelo.actualizar(req.params.id, req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

entradaRest.delete('/:id', function(req, res) {
    entradaModelo.eliminar(req.params.id).then(function () {
        res.json({ status: 'ok' });
    }, cbs.devolerError(res, 500));
});

module.exports = entradaRest;