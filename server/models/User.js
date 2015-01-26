var mongoose = require('mongoose'),
  encryption = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  username: { type: String, required: '{PATH} is required', unique: true},
  email: { type: String, required: '{PATH} is required' },
  phoneNumber: { type: String },
  salt: String,
  hashedPass: String,
  isAdmin: Boolean
});

userSchema.methods.authenticate = function(password) {
  var isPasswordCorrect = this.hashedPass == encryption.generateHashedPassword(this.salt, password);
  console.log(this.username + ' with correct password: ' + isPasswordCorrect);
  return isPasswordCorrect;
};

var User = mongoose.model('User', userSchema);

module.exports.seedUsers = function() {
  User.find({}).exec(function (err, collection) {
    if (err) {
      console.log('cannot find users: ' + err);
    }

    if (collection.length === 0) {
      var salt = encryption.generateSalt();
      var pass = encryption.generateHashedPassword(salt, 'admin');

      User.create({ username: 'admin', email: 'admin@admin.bg', phoneNumber: '123123', salt: salt, hashedPass: pass, isAdmin: true });
      User.create({ username: 'pesho', email: 'pesho@pesho.bg', phoneNumber: '123523', salt: salt, hashedPass: pass, isAdmin: false });
      console.log('Added users');
    }
  });
};