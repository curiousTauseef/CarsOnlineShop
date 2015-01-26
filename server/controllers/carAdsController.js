var Brand = require('mongoose').model('Brand');

module.exports = {
  getStaticBrands: function(req, res, next) {
    Brand.find({}).exec(function(err, collection) {
      if(err) {
        console.log('cannot find brands: ' + err);
      } else {
        res.send(collection);
        res.end();
      }
    })
  }
};