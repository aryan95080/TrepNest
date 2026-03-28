const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { renderBookingForm, createBooking, myBookings, deleteBooking } = require("../controllers/booking");
const { isLoggedIn } = require("../middleware");

router.get("/tripnests/:id/booking", isLoggedIn, wrapAsync(renderBookingForm));

router.post("/tripnests/:id/booking", isLoggedIn, wrapAsync(createBooking));

router.get("/my-bookings", isLoggedIn, wrapAsync(myBookings));

router.delete("/bookings/:id",isLoggedIn,wrapAsync(deleteBooking));

module.exports = router;