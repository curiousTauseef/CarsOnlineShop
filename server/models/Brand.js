var mongoose = require('mongoose');

var brandSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required' },
  models: [String]
});

var Brand = mongoose.model('Brand', brandSchema);

module.exports.seedInitialBrands = function() {
  Brand.find({}).exec(function (err, collection) {
    if (err) {
      console.log('cannot find brands: ' + err);
    }

    if (collection.length === 0) {
      Brand.create({ name: 'BMW', models: ['X1', 'X3', 'X5', 'X6', '1-series', '3-series', '5-series', '6-series', '7-series', 'M-power']});
      Brand.create({ name: 'Mercedes', models: ['ML', 'G-class', 'C-class', 'E-class', 'S-class', 'CLK-class']});
      Brand.create({ name: 'Opel', models: ['Corsa', 'Astra', 'Vectra', 'Signium', 'Insignia']});
      Brand.create({ name: 'VW', models: ['Polo', 'Gold', 'Vectra', 'Signium', 'Insignia']});
      Brand.create({ name: 'Audi', models: ['A3', 'A4', 'A6', 'A8', 'Q7']});
      Brand.create({ name: 'Peugeot', models: ['106', '207', '307', '408', '607']});
      console.log('Added some cars');
    }
  })
};