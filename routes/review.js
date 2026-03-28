const express = require("express");
const router = express.Router({ mergeParams: true });
const TripNest = require("../models/tripnest.js");
const Reviews = require("../models/reviews.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const { validateReview, isLoggedIn,isReviewAuthor } = require("../middleware.js");
const { createNewReview, deteleReview } = require("../controllers/reviews.js");

//Review post
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(createNewReview),
);

//Delete review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(deteleReview),
);

module.exports = router;
