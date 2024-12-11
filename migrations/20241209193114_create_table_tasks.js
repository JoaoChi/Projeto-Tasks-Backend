const { table } = require("../config/db");

exports.up = function(knex) {
  return knex.schema.createTable('Tasks', table => {
    table.increments('id').primary()
    table.string('desc').notNull()
    table.dateTime('estimateAt')
    table.dateTime('doneAt') 
    table.integer('userId').references('id')
        .inTable('Users').notNull
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('Tasks')
};
