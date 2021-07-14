const express = require('express');

const OpenersController = require('./controllers/OpenersControllers');
const IssuesController = require('./controllers/IssuesControllers');

const routes = express.Router();

/* Opener */
// list of openers account
routes.get('/openers', OpenersController.index);
// creat an opener account { username, email }
routes.post('/openers', OpenersController.create);

/* Issues */
// open an issue
routes.post('/issues/open', IssuesController.create);

module.exports = routes;
