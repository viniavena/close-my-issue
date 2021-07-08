exports.up = function (knex) {
  knex.schema.createTable('openers', function (table) {
    table.string('id').primary();
  });
};

exports.down = function (knex) {};
