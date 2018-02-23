var express = require('express');

var app = express();

app.get('/', function(req, res) {
  var name = 'Name';
  res.json('variable is = ' + name);
});

app.post

app.listen(4000, function(err) {
  if (err) throw err;
  console.log('server is running');
});