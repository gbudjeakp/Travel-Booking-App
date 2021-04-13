const mongoose = require("mongoose");
const { Schema } = mongoose;
const Cars = require("./Cars").schema;
const Flights = require("./Flights").schema;
const Hotels = require("./Hotel").schema;
const User = require("./User");

const itinerarySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  date: { type: Date },
  car: [Cars],
  flight: [Flights],
  hotel: [Hotels],
});
const Itinerary = mongoose.model("Itinerary", itinerarySchema);
module.exports = Itinerary;
