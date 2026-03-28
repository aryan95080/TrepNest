const Reviews = require('./models/reviews.js');
const TripNest=require('./models/tripnest.js');
const { tripnestSchema, reviewSchema} = require("./Schema.js");
const ExpressError = require("./utils/expressError.js");

module.exports.isLoggedIn = (req,res,next)=>{
    // console.log(req);
  if(!req.isAuthenticated()){
    req.session.redirectUrl=req.originalUrl;
    req.flash("error","You must be logged in to create new tripnest");
    return res.redirect("/login");
  }
  next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
  const { id } = req.params;
      let tripnest=await TripNest.findById(id);
      if(!tripnest.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not owner of this tripnest !");
        return res.redirect(`/tripnests/${id}`);
      }
      next();
}

module.exports.validateTripnest = (req, res, next) => {
  let { error } = tripnestSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((ele) => ele.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview=(req,res,next)=>{
  let {error}=reviewSchema.validate(req.body);
  if(error){
    let errMsg=error.details.map((ele)=>ele.message).join(",");
    throw new ExpressError(400,errMsg);
  }
  else{
    next();
  }
}

module.exports.isReviewAuthor=async(req,res,next)=>{
  const { reviewId,id } = req.params;
      let review=await Reviews.findById(reviewId);
      if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not author of this tripnest !");
        return res.redirect(`/tripnests/${id}`);
      }
      next();
}
