const connection = require('../database/connection');

// 1:08:04 - https://www.youtube.com/watch?v=G9kreOqUHLQ&t=294s

module.exports = {
  async create(req, res) {
    const opener_id = req.headers.authorization;
    const { title, description, price, username } = req.body;
    const opener_username = username;

    const [id] = await connection('issues').insert({
      title,
      description,
      price,
      opener_id,
      opener_username,
    });

    return res.json({ id });
  },
};
