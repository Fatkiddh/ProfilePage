var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var port = process.env.PORT || 5000;
var path = require('path');

var app = express(); // Self Instantiating Constructor

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.render('index');
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.get('/portfolio', function(req,res){
  res.render('Portfolio');
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
