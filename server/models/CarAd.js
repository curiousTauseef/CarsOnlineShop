var mongoose = require('mongoose');

var carAdSchema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: '{PATH} is required' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: '{PATH} is required' },
  model: { type: mongoose.Schema.Types.ObjectId, ref: 'Model', required: '{PATH} is required' },
  price: { type: Number, required: '{PATH} is required' },
  year: { type: Number, required: '{PATH} is required' },
  gearBox: { type: String, required: '{PATH} is required' },
  fuelType: { type: String, required: '{PATH} is required' },
  dateCreated: {type: Date, default: new Date(), required: '{PATH} is required' },
  pictures: [String]
});

var CarAd = mongoose.model('CarAd', carAdSchema);

module.exports = {
  seed: function() {
    //seed
  }
};