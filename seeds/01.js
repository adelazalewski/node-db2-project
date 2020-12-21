
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()
    
      // Inserts seed entries
      await knex('cars').insert([
        {manufacturer: 'HG', "model and milage": "BH41J"},
        {manufacturer: 'S3', "model and milage": "BMHB6"},
        
      ]);
    
};
