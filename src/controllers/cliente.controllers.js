const Cliente = require('../models/cliente.model');

module.exports = {
    async index(req,res){
        const user = await Cliente.find();
        res.json(user);
    },
    async create(req,res){
        const {nomeCliente, emailCliente, enderecoCliente, entregaCliente} = req.body;

        let data = {};

        let user = await Cliente.findOne({enderecoCliente});
        if(!user){
            data = {nomeCliente, emailCliente, enderecoCliente, entregaCliente};
            user = await Cliente.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    },
    async details(req,res){
        const {_id} = req.params;
        const user = await Cliente.findOne({_id});
        res.json(user);
    },
    async delete(req,res){
        const {_id} = req.params;
        const user = await Cliente.findByIdAndDelete({_id});
        return res.json(user);
    },
    async update(req,res){
        const {_id, nomeCliente, emailCliente, enderecoCliente, entregaCliente} = req.body;
        const data = {nomeCliente, emailCliente, enderecoCliente, entregaCliente};
        const user = await Cliente.findByIdAndUpdate({_id},data,{new:true});
        res.json(user);
    }
}
