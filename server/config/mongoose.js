var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);

  var db = mongoose.connection;
  db.once('open', function (err) {
    if(err) {
      console.log('Error opening database: ' + err);
    } else {
      console.log('Db up and running')
    }

    db.on('error', function (err) {
      console.log('Database error: ' + err);
    })
  });

  require('../models/User').seedUsers();
  require('../models/Brand').seedInitialBrands();
};