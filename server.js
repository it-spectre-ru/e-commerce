var express = require('express');
var morgan = require('morgan');

var app = express();

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