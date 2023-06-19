// todo
//  some meaningfull code here 
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hi, BB!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

module.exports = app;