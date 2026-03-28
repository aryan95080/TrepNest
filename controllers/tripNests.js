const TripNest = require("../models/tripnest");
const axios = require("axios");

module.exports.index = async (req, res) => {

  const { search, category, price } = req.query;

  let query = {};

  // SEARCH
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { country: { $regex: search, $options: "i" } }
    ];
  }

  // CATEGORY
  if (category) {
    query.category = category;
  }

  // PRICE SORT
  let sortOption = {};

  if (price === "low") {
    sortOption.price = 1;   // low to high
  }

  if (price === "high") {
    sortOption.price = -1;  // high to low
  }

  const allTripNests = await TripNest
    .find(query)
    .sort(sortOption)
    .populate("owner");

  res.render("tripnests/index.ejs", {
    allTripNests,
    search,
    currentCategory: category || "",
    currentPrice: price || ""
  });

};

module.exports.renderNewForm = (req, res) => {
  //console.log(req.user);
  res.render("tripnests/new.ejs");
};

module.exports.showTripnest = async (req, res) => {
  const { id } = req.params;
  const tripNest = await TripNest.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!tripNest) {
    req.flash("error", "Tripnest you requested does not exist");
    return res.redirect("/tripnests");
  }
  //console.log(tripNest);
  res.render("tripnests/show.ejs", { tripNest });
};

module.exports.renderAbout = (req, res) => {
  //console.log(req.user);
  res.render("tripnests/about.ejs");
};

module.exports.renderGuides = (req,res)=>{
    res.render("tripnests/travel-guides.ejs");
};

module.exports.renderCareers=(req,res)=>{
  res.render("tripnests/careers.ejs")
}

module.exports.renderBlog=(req,res)=>{
  res.render("tripnests/blog.ejs")
}

module.exports.renderContact=(req,res)=>{
  res.render("tripnests/contact.ejs")
}

module.exports.renderPrivacyAndPolicy=(req,res)=>{
  res.render("tripnests/privacy-policy.ejs")
}

module.exports.renderTermsAndService=(req,res)=>{
  res.render("tripnests/terms.ejs")
}

module.exports.renderCookie=(req,res)=>{
  res.render("tripnests/cookie.ejs")
}

module.exports.createTripnest = async (req, res, next) => {
  let url=req.file.path;
  let filename=req.file.filename;
  // console.log(url,"  ,  ",filename);
  const newTripNest = new TripNest(req.body.tripnest);
  //console.log(newTripNest);
  newTripNest.owner = req.user._id;
  newTripNest.image = {url,filename};
  await newTripNest.save();
  req.flash("success", "New tripnest created.");
  return res.redirect("/tripnests");
};

module.exports.randerEditForm = async (req, res) => {
  const { id } = req.params;
  const tripNest = await TripNest.findById(id);

  if (!tripNest) {
    req.flash("error", "Tripnest you requested for does not exit!");
    res.redirect("/tripnests");
  }
  res.render("tripnests/edit.ejs", { tripNest });
};

module.exports.updateTripnest = async (req, res) => {
  const { id } = req.params;

  let tripnest = await TripNest.findByIdAndUpdate(
    id,
    req.body.tripnest,
    {
      returnDocument: true,
      runValidators: true,
    }
  );

  // if new image uploaded
  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;

    tripnest.image = { url, filename };
    await tripnest.save();
  }

  req.flash("success", "Tripnest updated");
  res.redirect(`/tripnests/${id}`);
};

module.exports.deleteTripnest = async (req, res) => {
  const { id } = req.params;
  let deleteTripnest = await TripNest.findByIdAndDelete(id);
  // console.log(deleteTripnest)
  req.flash("success", "Listing Deleted!");
  res.redirect("/tripnests");
};


