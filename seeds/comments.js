exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments').insert({user_id: 1, post_id: 1, content: 'Bitchin'}),
    knex('comments').insert({user_id: 2, post_id: 2, content: 'whaattt!'}),
    knex('comments').insert({user_id: 3, post_id: 3, content: 'I dont agree with you!'})
  );
};
