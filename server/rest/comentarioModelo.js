var db = require('./../database');

function ComentarioModelo() {}
ComentarioModelo.prototype.listar = function(parametros) {
    parametros = parametros || {};
    return db.comentario.find(parametros).exec();
};

ComentarioModelo.prototype.crear = function(data) {
    return db.comentario.create(data);
};

ComentarioModelo.prototype.actualizar = function(id, data) {
    return db.comentario.findOneAndUpdate({
        _id: id
    }, data, { new: true }).exec();
};

ComentarioModelo.prototype.eliminar = function(id) {
    return db.comentario.findOneAndRemove({ _id: id}).exec();
}

module.exports = new ComentarioModelo();