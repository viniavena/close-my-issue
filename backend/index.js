const { request } = require('express');
const express = require('express');

const app = express();
app.use(express.json());

/*
Rotas / Recursos (tabela no BD)
*/

app.get('/projects/:id', (req, res) => {
  const params = req.params;
  console.log(params);
  return res.json({ project: 'close my issue', author: 'Vinicius Avena' });
});

app.listen(3333);
