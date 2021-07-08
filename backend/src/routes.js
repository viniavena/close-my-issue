const express = require('express');

const routes = express.Router();

routes.get('/projects', (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json({ project: 'close my issue', author: 'Vinicius Avena' });
});

module.exports = routes;
