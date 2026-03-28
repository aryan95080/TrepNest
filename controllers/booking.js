const TripNest = require("../models/tripnest");
const Booking = require("../models/booking");

module.exports.renderBookingForm = async (req, res) => {

  const { id } = req.params;

  const tripNest = await TripNest.findById(id);

  res.render("tripnests/booking.ejs", { tripNest });

};



module.exports.createBooking = async (req, res) => {

  const { id } = req.params;

  const { checkIn, checkOut } = req.body;

  const tripNest = await TripNest.findById(id);


  // CHECK DATE VALIDATION

  if (new Date(checkOut) <= new Date(checkIn)) {

    req.flash("error", "Check-out must be after Check-in");

    return res.redirect(`/tripnests/${id}/booking`);

  }


  // CHECK ALREADY BOOKED

  const existingBooking = await Booking.findOne({

    tripNest: id,

    $or: [
      {
        checkIn: { $lt: checkOut },
        checkOut: { $gt: checkIn }
      }
    ]

  });

  if (existingBooking) {

    req.flash("error", "These dates are already booked");

    return res.redirect(`/tripnests/${id}/booking`);

  }


  // CALCULATE DAYS

  const days =
    (new Date(checkOut) - new Date(checkIn)) /
    (1000 * 60 * 60 * 24);


  const totalPrice = days * tripNest.price;


  const booking = new Booking({

    tripNest: id,

    user: req.user._id,

    checkIn,

    checkOut,

    totalPrice

  });

  await booking.save();


  req.flash("success", "Booking Confirmed!");

  res.redirect(`/tripnests/${id}`);

};

module.exports.myBookings = async (req, res) => {

  const bookings = await Booking.find({ user: req.user._id })
  .populate("tripNest");

  res.render("users/bookings.ejs", { bookings });

};

module.exports.deleteBooking = async (req, res) => {

  const { id } = req.params;

  await Booking.findByIdAndDelete(id);

  req.flash("success", "Booking Cancelled");

  res.redirect("/my-bookings");

};