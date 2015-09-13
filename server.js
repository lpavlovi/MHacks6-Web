var io = require('socket.io')(80);
var http = require("http");
var express = require('express');
var app = express();
var port_number = process.env.PORT;
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongodb = require('mongodb');
var mongo_client = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/task_database';

app.use('/', express.static(__dirname + '/project'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var serve = http.listen((port_number || 3000), function() {
  console.log('Port: %s', serve.address().port);
});

io.listen(app);

var socket = io.connect();

socket.on('task_acknowledged', function (from, msg) {
    mongo_client.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            // Connection successful
            var collection = db.collection('tasks');
            var values = msg.split("-");
            var name = values[0];
            var description = values[1];
            var priority = values[2];
            collection.remove({name: name, description: description, priority:priority}}); 
    });
    console.log('I received a private message by ', from, ' saying ', msg);
});

app.post('/rest/tasks/new', function(req, res) {
    var name = req.body.name;
    var description = req.body.description;
    var priority = req.body.priority;
    var msg = priority + '-' + name + '-' + description; 
    socket.emit('new_task', msg); 
    res.send(msg);
    mongo_client.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            // Connection successful
            var collection = db.collection('tasks');
            var task = {name: name, description: description, priority:priority};
            collection.insert(task, function (err, result) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("new task inserted!");
                }
                db.close();
            }
    });

});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
