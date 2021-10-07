const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nomeCliente:String,
    emailCliente:String,
    enderecoCliente:String,
    entregaCliente:String
},{
    timestamps:true
});


const clientes = mongoose.model('Clientes',DataSchema);
module.exports = clientes;