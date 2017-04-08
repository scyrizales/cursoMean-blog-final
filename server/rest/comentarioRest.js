var cbs = require('./../lib/callbacks');
var express = require('express');
var comentarioRest = express();
var comentarioModelo = require('./comentarioModelo');

comentarioRest.get('', function(req, res) {
    comentarioModelo.listar()
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

comentarioRest.get('/entrada/:idEntrada', function(req, res) {
    comentarioModelo.listar({ entrada: req.params.idEntrada })
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

comentarioRest.get('/:id', function(req, res) {
    comentarioModelo.listar({ _id: req.params.id })
        .then(function (comentarios) {
            if (comentarios && comentarios.length) {
                res.json(comentarios[0]);
            } else {
                res.json(null);
            }
        }, cbs.devolerError(res, 500));
});

comentarioRest.post('', function(req, res) {
    comentarioModelo.crear(req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

comentarioRest.put('/:id', function(req, res) {
    comentarioModelo.actualizar(req.params.id, req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

comentarioRest.delete('/:id', function(req, res) {
    comentarioModelo.eliminar(req.params.id).then(function () {
        res.json({ status: 'ok' });
    }, cbs.devolerError(res, 500));
});

module.exports = comentarioRest;