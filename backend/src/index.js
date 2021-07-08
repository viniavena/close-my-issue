const express = require('express');
const routes = require('./routes');

/*
Rotas / Recursos (tabela no BD)

BD: SQLite
Querybuilder: Knex
*/

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333);
