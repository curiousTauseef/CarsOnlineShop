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
    db: 'mongodb://bateadmin:mongolabadmin@ds053698.mongolab.com:53698/carsonlineshop',
    port: process.env.PORT || 3000,
    env: env
  }
};
module.exports = configs[env];