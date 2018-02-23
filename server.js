var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://root:toor@ds245218.mlab.com:45218/amazon-clone', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});


//middleware
app.use(morgan('dev'))



app.get('/', function(req, res) {
  var name = 'Name';
  res.json('variable is = ' + name);
});

app.get('/catname', function(req, res) {
  res.json('batman');
});

app.listen(4000, function(err) {
  if (err) throw err;
  console.log('server is running');
});