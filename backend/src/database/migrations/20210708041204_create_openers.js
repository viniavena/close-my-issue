// npx knex migrate:make create_openers

exports.up = function (knex) {
  return knex.schema.createTable('openers', function (table) {
    table.string('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('openers');
};
