var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
    texto: String,
    entrada: { type: Schema.Types.ObjectId, ref: 'Entrada' },
    autor: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    comentario: { type: Schema.Types.ObjectId, ref: 'Comentario' }
});

module.exports = mongoose.model('Comentario', comentarioSchema);