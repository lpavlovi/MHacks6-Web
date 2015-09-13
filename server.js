var express = require('express');
var app = express();
var port_number = process.env.PORT;
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongodb = require('mongodb');
var mongo_client = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/task_database';
mongo_client.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        // Connection successful
        db.close();
    }
});

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
