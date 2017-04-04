var express = require("express");
router = express.Router();
knex = require("../db/knex")

router.route('/')
    .post(function(req, res) {
        knex('users')
            .insert({
                full_name: req.body.user.name,
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

router.route("/new")
    .get((req, res) => {
        res.render('users/new');
    });

router.route("/:id")
    








module.exports = router;
