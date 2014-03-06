var express = require('express');
var app = express();
var exphbs  = require('express3-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded());
app.use(express.json());
app.use(app.router);

app.use(express.static('./components'));
app.use(express.static('./views/layouts'));
app.use(express.static('./assets'));

var player = {};

app.get('/player', function(req,res){

    player = {
        serverURL: req.query.server_url,
        url: req.query.url,
        artist: req.query.artist,
        title: req.query.title
    }

    res.render('flashPlayer', player);
});

var server = app.listen(3112);