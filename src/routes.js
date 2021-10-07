const express = require('express');

const routes = express.Router();

const Cliente = require('./controllers/cliente.controllers');

routes.get('/', Cliente.index);

// Rotas de Clientes
routes.post('/api/clientes', Cliente.create);
routes.get('/api/clientes', Cliente.index);
routes.get('/api/clientes.details/:_id', Cliente.details);
routes.delete('/api/clientes/:_id', Cliente.delete);
routes.put('/api/clientes', Cliente.update);

module.exports = routes;