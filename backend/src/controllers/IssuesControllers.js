const connection = require('../database/connection');

// 1:08:04 - https://www.youtube.com/watch?v=G9kreOqUHLQ&t=294s

module.exports = {
  async create(req, res) {
    const {} = req.headers;
    const { title, description, price } = req.body;
  },
};
