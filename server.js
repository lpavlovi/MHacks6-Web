var express = require('express');
var app = express();
var port_number = process.env.PORT;

app.use('/', express.static(__dirname + '/project'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var serve = app.listen((port_number || 3000), function() {
  console.log('Port: %s', serve.address().port);
});
