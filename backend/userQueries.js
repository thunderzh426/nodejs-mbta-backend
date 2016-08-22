var mongoose = require('mongoose');
var promise = require('bluebird');
mongoose.Promise = promise;
mongoose.connect('mongodb://localhost/oscgc');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    dob: Date
});

var User = mongoose.model('t_user', userSchema);


var saveUser = function(req, res, next) {
    var user = new User({
      name: req.body.name,
      age: req.body.age,
      sex: req.body.sex,
      dob: req.body.dob
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    user.save(function (err, user) {
      if (err) return console.error(err);
      console.log("User: "+user.name);
    }).then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

var getUsers = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    User.find(function (err, users) {
      if (err) return console.error(err);
      console.log(users);
    }).then(function(data){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(200)
        .json({
          status: 'success',
          data: JSON.stringify(data),
          message: 'Retrieved ALL users'
        });
      });
}

var getUser = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (!req.query.name){
      res.status(500).json({
        status: 'error',
        message: 'User name required!'
      })
      return;
    }
    var query = User.findOne({name: req.query.name});
    query.exec().then(function(data){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
      });
}

module.exports = {
  saveUser: saveUser,
  getUsers: getUsers,
  getUser: getUser
};
