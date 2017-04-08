var db = require('./../database');

function EntradaModelo() {}
EntradaModelo.prototype.listar = function(parametros) {
    parametros = parametros || {};
    return db.entrada.find(parametros).populate('autor').exec();
};

EntradaModelo.prototype.crear = function(data) {
    return db.entrada.create(data);
};

EntradaModelo.prototype.actualizar = function(id, data) {
    return db.entrada.findOneAndUpdate({
        _id: id
    }, data, { new: true }).exec();
};

EntradaModelo.prototype.eliminar = function(id) {
    return db.entrada.findOneAndRemove({ _id: id}).exec();
}

module.exports = new EntradaModelo();