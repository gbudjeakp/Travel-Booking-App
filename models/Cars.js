const mongoose = require("mongoose");

const { Schema } = mongoose;

const carSchema = new Schema({
  name: { type: String },
  total: { type: Number },
  imageUrl: { type: String },
  rentOutDate: { type: Date },
  returnRentalDate: { type: Date },
  rating: { type: Number },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
