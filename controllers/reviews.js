const TripNest=require("../models/tripnest.js");
const Reviews=require("../models/reviews.js");

module.exports.createNewReview=async (req, res) => {
    const tripnest = await TripNest.findById(req.params.id);

    if (!tripnest) {
      throw new ExpressError(404, "TripNest not found");
    }

    const newReview = new Reviews(req.body.review);
    newReview.author = req.user._id;
    // console.log(newReview);
    // push review into tripnest
    tripnest.reviews.push(newReview);
    await newReview.save();
    await tripnest.save();
    //console.log("Review submitted successfully");
    req.flash("success", "New Review created");
    res.redirect(`/tripnests/${tripnest._id}`);
  }

module.exports.deteleReview=async (req, res) => {
    let { id, reviewId } = req.params;
    await TripNest.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Reviews.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted");
    res.redirect(`/tripnests/${id}`);
  }