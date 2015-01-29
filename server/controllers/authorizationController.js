var passport = require('passport');

module.exports = {
  login: function(req, res, next) {
    console.dir(req.body);
    var auth = passport.authenticate('local', function(err, user) {
      if(err) {
        console.log('Error passport authenticate: ' + err);
        return next(err);
      }
      if(!user) {
        console.log('Error no user: ' + err);
        console.log(user);
        res.send({ success: false });
      } else {
        req.login(user, function(err) {
          if(err) {
            return next(err);
          }
          res.send({ success: true, user: user });
        })
      }
    });

    auth(req, res, next);
  },
  logout: function(req, res, next) {
    req.logout();
    res.end();
  },
  isAuthenticated: function(req, res, next) {
    if(!req.isAuthenticated()) {
      res.status(403);
      res.end();
    } else {
      next();
    }
  },
  isAdmin: function(req, res, next) {
    if(req.isAuthenticated() && req.user.isAdmin === true) {
      next();
    } else {
      res.status(403);
      res.end();
    }
  }
};