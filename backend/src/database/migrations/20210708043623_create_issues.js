exports.up = function (knex) {
  return knex.schema.createTable('issues', function (table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('price').notNullable();

    table.string('opener_id').notNullable(); // relacionamento
    table.string('opener_username').notNullable(); // relacionamento

    table.foreign('opener_id').references('id').inTable('openers');
    table.foreign('opener_username').references('username').inTable('openers');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('issues');
};
