exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('users').insert({name: 'George', username: 'GW_ashington'}),
    knex('users').insert({name: 'Thomas', username: 'TJ_efferson'}),
    knex('users').insert({name: 'James', username: 'JM_adison'})
);
};
