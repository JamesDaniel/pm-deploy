var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, World!');
});

var server = app.listen(8086, function() {

console.log('Server listening on port 8086');

});
