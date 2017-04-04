var express = require('express');
router = express.Router();
knex = require('../db/knex')

router.route('/')
    .post(function(req, res) {
        knex('posts')
            .insert({
                user_id: req.body.post.user_id,
                post_title: req.body.post.post_title,
                post_body: req.body.post.post_body
            })
            .returning('id')
            .then(function(id) {
                res.redirect(`/posts/${id}`);
            })
    })

    .get(function(req, res) {
        knex('posts')
            .select('user_id', 'post_title', 'post_body')
            .then(function(posts) {
                res.render('posts/index', {
                    posts
                });
            });
    });


    module.exports = router;
