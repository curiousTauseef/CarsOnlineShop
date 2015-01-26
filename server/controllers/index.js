var authorizationController = require('./authorizationController'),
  usersController = require('./usersController'),
  carAdsController = require('./carAdsController');

module.exports = {
  auth: authorizationController,
  users: usersController,
  carAds: carAdsController
};
