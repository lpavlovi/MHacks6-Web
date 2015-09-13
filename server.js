var express = require('express');
var app = express();
var port_number = process.env.PORT;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/project'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var serve = http.listen((port_number || 3000), function() {
  console.log('Port: %s', serve.address().port);
});


app.get('/rest/test', function(req, res) {
  res.send('TEST COMPLETE!');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
