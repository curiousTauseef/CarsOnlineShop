var mongoose = require('mongoose');

var carAdSchema = mongoose.Schema({
  brand: { type: String, required: '{PATH} is required' },
  model: { type: String, required: '{PATH} is required' },
  price: { type: Number },
  salt: String,
  hashedPass: String,
  isAdmin: Boolean
});

var CarAd = mongoose.model('CarAd', carAdSchema);