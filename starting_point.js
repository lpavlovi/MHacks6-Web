var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_76qjbg9s:qagia4spo0jku2fhvkchl7v@ds031988.mongolab.com:31988/heroku_76qjbg9s', function(err, res) {
      if(err)
      {
        console.log(err);
        return;
      }
      console.log(res);
    });

/*
mongoose.connect('mongodb://heroku_p8gkjrgx:pj5gvlp4dqeh7lttv1i91lv46f@ds035358.mongolab.com:35358/heroku_p8gkjrgx', function(err, result) {
    if(err) {
      connect.error(err);
    }
      console.log('sucessful connection established');
  });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
  console.log('YAY!');
});

var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods = {
  speak: function() {
    var greeting = this.name ? 'Hi, my name is ' + this.name : 'I don\'t have a name'
    console.log(greeting);
  }
};

var TalkingKitten = mongoose.model('Kitten', kittySchema);
var fluff = new TalkingKitten({name: 'fluff'});
fluff.speak();

TalkingKitten.find({}).exec(function(err, result) {
      if (!err) {
        console.log('FOUND: ' + result);
      } else {
        // error handling
        console.error(err)
      };
    });

fluff.save(function(err) {if(err) console.log('Error on save')});
*/
