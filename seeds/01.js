
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {colName: 'rowValue1'},
        {colName: 'rowValue2'},
        
      ]);
    });
};
