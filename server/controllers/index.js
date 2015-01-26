var authorizationController = require('./authorizationController'),
  usersController = require('./usersController');

module.exports = {
  auth: authorizationController,
  users: usersController
};
