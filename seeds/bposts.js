exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({user_id: 1, post_title: 'number1 post', post_body: 'hey this is a post'}),
    knex('posts').insert({user_id: 2, post_title: 'number2 post', post_body: 'wont you look at that'}),
    knex('posts').insert({user_id: 3, post_title: 'number3 post', post_body: 'water bottle cell phone and some random stuff'})
  );
};
