const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({

  tripNest: {
    type: Schema.Types.ObjectId,
    ref: "TripNest",
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  checkIn: {
    type: Date,
    required: true
  },

  checkOut: {
    type: Date,
    required: true
  },

  totalPrice: {
    type: Number,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Booking", bookingSchema);