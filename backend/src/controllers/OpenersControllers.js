const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(req, res) {
    const openers = await connection('openers').select('*');

    return res.json(openers);
  },

  async create(req, res) {
    const { username, email } = req.body;

    const id = crypto.randomBytes(2).toString('HEX');

    await connection('openers').insert({
      id,
      username,
      email,
    });

    return res.json({ id });
  },
};
