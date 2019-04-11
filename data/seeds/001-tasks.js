
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {id: 1, name: 'Finish'},
        {id: 2, name: 'rowValue2', is_complete: true},
        {id: 3, name: 'rowValue3'}
      ]);
    });
};
