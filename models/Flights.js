const mongoose = require("mongoose");

const { Schema } = mongoose;

const flightsSchema = new Schema({
  departureDate: { type: Date },
  // In case its not a round-trip required is set to false
  returnDate: { type: Date },
  departureLocation: { type: String },
  destinationLocation: { type: String },
  carrierDeparture: { type: Number },
  carrierArrival: { type: Number },
  carrier: { type: String },
  price: { type: Number },
  departureObj: { type: Object },
  arrivalObj: { type: Object },
});

const Flights = mongoose.model("Flights", flightsSchema);

module.exports = Flights;
