var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejsMate = require('ejs-mate');


var User = require('./models/user');

var app = express();

mongoose.connect('mongodb://root:toor@ds245218.mlab.com:45218/amazon-clone', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.post('/create-user', function(req, res, next) {
  var user = new User();

  user.profile.name = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email;
  
  user.save(function(err) {
    if (err) return next(err);
    res.json('successfully created a new user')
  });
});

app.get('/', function(req, res) {
  res.render('main/home');
});

app.get('/about', function(req, res) {
  res.render('main/about');
});


app.listen(4000, function(err) {
  if (err) throw err;
  console.log('server is running');
});