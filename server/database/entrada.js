var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entradaSchema = new Schema({
    titulo: String,
    cuerpo: String,
    imagen: String,
    autor: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Entrada', entradaSchema);