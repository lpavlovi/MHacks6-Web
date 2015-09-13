var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// var http = require("http");
var express = require('express');
// var app = express();
// var port_number = process.env.PORT || 3000;
var port_number = 3000;
var mongodb = require('mongodb');
var mongo_client = mongodb.MongoClient;
var bodyParser = require('body-parser');
var url = process.env.PORT ? 'mongodb://heroku_76qjbg9s:qagia4sponi0jku2fhvkchl7vb@ds035428.mongolab.com:35428/heroku_76qjbg9s' : 'mongodb://localhost:27017/task_database';
var clients = [];

mongo_client.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('SUCCESS');
        // Connection successful
        db.close();
    }
});

// console.log('mHacks - Port: %s', serve.address().port);
app.use('/', express.static(__dirname + '/project'));

app.use(bodyParser.json())
app.set('port', port_number);
app.use('/bower_components', express.static(__dirname + '/bower_components'));

io.on('connection', function(socket) {
    console.log('socket connected! ' + socket);
    clients.push(socket);
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
    socket.on('event', function(data) {
      console.log(data);
    });
    socket.on('disconnect', function() {
        var index = clients.indexOf(socket);
        if(index != -1) {
            client.splice(index, 1);
        }
    });
});

io.on('task_acknowledged', function (socket) {
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
            collection.remove({name: name, description: description, priority:priority});
            console.log('task has been acknowledged');
        }
    });
    console.log('I received a private message by ', from, ' saying ', msg);
});
app.post('/rest/tasks/new', function(req, res) {
    /*
    res.end(JSON.stringify(req.body, null, 2))
    return;
    */
    var name = req.body.name;
    var description = req.body.description;
    var priority = req.body.priority;
    var msg = priority + '-' + name + '-' + description; 
    var randomClient;
    // send msg to 1 random client
    if(clients.length > 0) {
        randomClient = Math.floor(Math.random() * clients.length);
        clients[randomClient].emit('new_task', msg);
    }
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
            });
        }
    });
    res.send(msg);
});

http.listen((port_number), function() {
  console.log('mHacks - Port: %s', port_number);
});

io.listen(http);
