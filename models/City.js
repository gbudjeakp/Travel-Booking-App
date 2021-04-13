const mongoose = require('mongoose');

const { Schema } = mongoose;

const citySchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  cityId: { type: String, required: true },
  imageUrl: {type: String}
});

const City = mongoose.model('City', citySchema);

module.exports = City;
