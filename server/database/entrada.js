var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entradaSchema = new Schema({
    titulo: { type: String, required: true },
    cuerpo: { type: String, required: true },
    imagen: String,
    autor: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

module.exports = mongoose.model('Entrada', entradaSchema);