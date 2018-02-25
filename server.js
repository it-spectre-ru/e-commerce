var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejsMate = require('ejs-mate');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');



var User = require('./models/user');

var app = express();

mongoose.connect('mongodb://root:toor@ds245218.mlab.com:45218/amazon-clone', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to mongodb cloud');
  }
});


//middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "123abc"
}));
app.use(flash());
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');

app.use(mainRoutes);
app.use(userRoutes);


app.listen(4000, function(err) {
  if (err) throw err;
  console.log('server is running on http://localhost:4000');
});