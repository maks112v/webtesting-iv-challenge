
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', tbl => {
    tbl.increments()
    tbl.string('name',128).notNullable()
    tbl.boolean('is_complete').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todo')
};
