var express = require('express');
var routes = require('./routes/router');
var app = express();
var path = require('path');
var swig = require('swig');
var models = require('./models/index.js');
var wiki = require('./routes/wiki');

app.listen(3000);

app.use(express.static(path.join(__dirname, './pics')));
app.use(routes);
app.use('/wiki', wiki);

// point res.render to the proper directory
app.set('views', __dirname + '/views');
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files
// have it use swig to do so
app.engine('html', swig.renderFile);
// turn of swig's caching
//app.setDefaults({cache: false}); <-- breaks the project, for some reason

models.User.sync({force: true})
.then(function () {
    return models.Page.sync({force: true})
})
.then(function () {
    app.listen(3001, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);
