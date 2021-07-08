const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

// get the list of openers account
routes.get('/openers', async (req, res) => {
  const openers = await connection('openers').select('*');

  return res.json(openers);
});

// creat an opener account { username, email }
routes.post('/openers', async (req, res) => {
  const { username, email } = req.body;

  const id = crypto.randomBytes(2).toString('HEX');

  await connection('openers').insert({
    id,
    username,
    email,
  });

  return res.json({ id });
});

module.exports = routes;
