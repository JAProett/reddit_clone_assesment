require('ejs')

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const usersRouter = require('./routes/users');
// const postsRouter = require('./routes/posts');
// const commentsRouter = require('./routes/comments')
require('locus');



app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

app.get('/', function(req, res) {
    res.render('statics/home')
});

// routes for all 3 resources
// app.use('/users', usersRouter);
// app.use('/posts', postsRouter);
// app.use('/comments', commentsRouter);

app.listen(3000,
    function() {
        console.log('working?');
    })
