exports.up = function (knex) {
  knex.schema.createTable('openers', function (table) {
    table.string('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = function (knex) {};
