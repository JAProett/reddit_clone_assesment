var express = require('express');
router = express.Router();
knex = require('../db/knex')

router.route('/')
    .post(function(req, res) {
        knex('users')
            .insert({
                name: req.body.user.name,
                username: req.body.user.username
            })
            .returning('id')
            .then(function(id) {
                res.redirect(`/users/${id}`);
            })
    })

    .get(function(req, res) {
        knex('users')
            .select('id', 'username')
            .then(function(users) {
                res.render('users/index', {
                    users
                });
            });
    });

router.route('/new')
    .get((req, res) => {
        res.render('users/new');
    });

router.route('/:id')

    .delete(function(req, res) {
        knex('users')
            .del()

            .where({
                id: req.params.id
            })
            .then(function() {
                res.redirect(`/users`);
            })

    })

    .get(function(req, res) {
        knex('users')
            .select('id', 'name', 'username')
            .where({
                id: req.params.id
            })
            .first()
            .then(function(user) {
                res.render('users/show', {
                    user
                })
            })
    })

    .put(function(req, res) {
        knex('users')
            .update({
                name: req.body.user.name,
                username: req.body.user.username,
            })
            .where({
                id: req.params.id
            })
            .then(function() {
                res.redirect(`/users/${req.params.id}`);
            });
    });

router.route('/:id/edit')
    .get(function(req, res) {
        knex('users')
            .select('id', 'name', 'username')
            .where({
                id: req.params.id
            })
            // limit 1
            .first()
            .then(function(user) {
                // this passes the user to the ejs template
                res.render('users/edit', {
                    user
                });
            });
    });

router.route('/:id/delete')
    .get(function(req, res) {
        knex('users')
            .select('id', 'username')
            .where({
                id: req.params.id
            })
            .first()
            .then(function(user) {
                res.render('users/delete', {
                    user
                });
            });
    });









module.exports = router;
