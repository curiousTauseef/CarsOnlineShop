var User = require('mongoose').model('User'),
  encryption = require('../utilities/encryption');

module.exports = {
  deleteById: function(req, res, next) {
    console.log('delete by id: ', req.params.id);
    if(req.user._id == req.params.id) {
      res.send({ success: false, error: 'Lol you tried to delete yourself! Ha ha' });
      return res.end();
    }

    User.remove({ _id: req.params.id }, function(err) {
      if(err) {
        res.send({ success: false, error: err.toString() });
      } else {
        res.send({ success: true });
      }
      res.end();
    });
  },
  getAllUsers: function(req, res, next) {
    User.find({}).exec(function(err, collection) {
      if(err) {
        console.log('Users could not be loaded: ' + err);
      } else {
        res.send(collection);
      }
    })
  },
  getById: function(req, res, next) {
    console.log('GET BY ID: ' + req.params.id);
    User.find({ _id: req.params.id }).exec(function(err, dbUser) {
      if(err) {
        console.log('User could not be found by id: ' + err);
      } else {
        res.send(dbUser);
      }
    })
  },
  signUp: function(req, res, next) {
    console.log('Registering user:' + req.body.username);
    var username = req.body.username,
      password = req.body.password,
      repeatPassword = req.body.repeatPassword;

    if(password !== repeatPassword || !password || password.length == 0) {
      res.send({ success: false, error: 'Password not correct' });
      res.end();
      return;
    }

    User.findOne({ username: username }).exec(function(err, user) {
      if(err) {
        res.send({ success: false, error: err.toString() });
        res.end();
      }
      else if(!user) {
        console.log('creating new user');
        var newUserData = req.body;
        newUserData.salt = encryption.generateSalt();
        newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);

        User.create(newUserData, function(err, dbUser) {
          console.log('ERRR: ' + err);
          console.log('DBUSER: ' + dbUser);
          if(err) {
            console.log('Failed to register new user: ' + err);
            return;
          }
          req.login(dbUser, function(err) {
            if(err) {
              res.status(400);
              return res.send({ success: false, error: err.toString() })
            }

            res.send(dbUser);
            res.end();
          })
        })
      }
      else {
        console.log('user exists');
        res.send({ success: false, error: 'User already registered' });
        res.end();
      }
    })
  }
};