const mongoose = require("mongoose");

const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: { type: String },
  numberOfOccupants: { type: Number },
  roomNumber: { type: String },
  checkInDate: { type: Date },
  checkOutDate: { type: Date },
  image: { type: String },
  rating: { type: Number },
  location: { type: String },
  reviews: { type: String },
  price: { type: Number },
});
const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
