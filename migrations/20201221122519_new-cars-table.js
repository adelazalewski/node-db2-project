
exports.up =async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.text("manufacturer", 2).unique().notNull()
      table.text("model and milage", 5).unique().notNull()
      table.text("transmission type and status of the title")
  })
};

exports.down =async function(knex) {
  await knex.schema.dropTable("cars")
};
