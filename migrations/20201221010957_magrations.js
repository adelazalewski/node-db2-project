
exports.up =async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      //the manufacturer code
      table.float("manufacturer", 2).notNull().unique()
      //5digit code whit all the car's info
      table.float("model and milage", 5).notNull().unique()
      table.text("type and status of title") //optional
  })
};

exports.down =async function(knex) {
  await knex.schema.dropTable("cars")
};
