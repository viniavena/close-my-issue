const express = require('express');

const OpenersController = require('./controllers/OpenersControllers');

const routes = express.Router();

// list of openers account
routes.get('/openers', OpenersController.index);

// creat an opener account { username, email }
routes.post('/openers', OpenersController.create);

module.exports = routes;
