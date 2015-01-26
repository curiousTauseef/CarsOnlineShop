var User = require('mongoose').model('User');

module.exports = {
  deleteById: function(req, res, next) {
    console.log('delete by id: ', req.params.id);
    res.send({ success: true });
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
  }
};