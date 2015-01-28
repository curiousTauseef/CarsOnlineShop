var mongoose = require('mongoose');

var brandSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required' }
});
var Brand = mongoose.model('Brand', brandSchema);


//just want to make seed method with less code, that's why both models are here.
var modelSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }
});
var Model = mongoose.model('Model', modelSchema);

module.exports.seedInitialBrands = function() {
  Brand.find({}).exec(function (err, collection) {
    if (err) {
      console.log('cannot find brands: ' + err);
    }

    if (collection.length === 0) {
      Brand.create({ name: 'BMW' }, function(err, brand) {
        Model.create({ name: 'X1', brand: brand._id }, { name: 'X1', brand: brand._id },
          { name: 'X3', brand: brand._id }, { name: 'X5', brand: brand._id },
          { name: 'X6', brand: brand._id }, { name: '1-series', brand: brand._id },
        { name: '3-series', brand: brand._id }, { name: '5-series', brand: brand._id },
        { name: '7-series', brand: brand._id }, { name: 'M power', brand: brand._id });
      });

      Brand.create({ name: 'Mercedes' }, function(err, brand) {
        Model.create({ name: 'ML', brand: brand._id }, { name: 'G-class', brand: brand._id },
          { name: 'C-class', brand: brand._id }, { name: 'E-class', brand: brand._id },
          { name: 'S-class', brand: brand._id }, { name: 'CLK-class', brand: brand._id });
      });

      Brand.create({ name: 'Opel' }, function(err, brand) {
        Model.create({ name: 'Corsa', brand: brand._id }, { name: 'Astra', brand: brand._id },
          { name: 'Vectra', brand: brand._id }, { name: 'Signium', brand: brand._id },
          { name: 'Insignia', brand: brand._id });
      });

      Brand.create({ name: 'VW' }, function(err, brand) {
        Model.create({ name: 'Polo', brand: brand._id }, { name: 'Golf', brand: brand._id },
          { name: 'Phaeton', brand: brand._id }, { name: 'Jetta', brand: brand._id },
          { name: 'Passat', brand: brand._id });
      });

      Brand.create({ name: 'Audi' }, function(err, brand) {
        Model.create({ name: 'A3', brand: brand._id }, { name: 'A3', brand: brand._id },
          { name: 'A4', brand: brand._id }, { name: 'A6', brand: brand._id },
          { name: 'A8', brand: brand._id }, { name: 'Q7', brand: brand._id })
      });

      Brand.create({ name: 'Peugeot' }, function(err, brand) {
        Model.create({ name: '106', brand: brand._id }, { name: '207', brand: brand._id },
          { name: '307', brand: brand._id }, { name: '408', brand: brand._id },
          { name: '607', brand: brand._id })
      });

      console.log('Added some cars');
    }
  })
};