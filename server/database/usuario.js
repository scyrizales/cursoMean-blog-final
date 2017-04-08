var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
    foto: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);