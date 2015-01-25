var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

var env = process.env.NODE_ENV || 'development';

configs = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/carsonlineshop',
    port: process.env.PORT || 3000,
    env: env
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/carsonlineshop', //TODO: Change it if deploy on cloud!!!
    port: process.env.PORT || 3000,
    env: env
  }
};
module.exports = configs[env];