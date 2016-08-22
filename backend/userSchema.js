var mongoose = require('mongoose');
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

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
}
