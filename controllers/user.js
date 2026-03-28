const Booking = require("../models/booking.js");
const Tripnest = require("../models/tripnest.js");
const User=require("../models/user.js")

module.exports.rengerSignUpForm=(req,res)=>{
    res.render("users/signUp.ejs");
}

module.exports.signUp=async(req,res)=>{
    try {
        let {username,email,password}=req.body;
    const newUser=new User({email,username});
    const registerUser=await User.register(newUser,password);
   // console.log(registerUser);

   req.login(registerUser,(err)=>{
    if(err){
        return next(err);
    }
    req.flash("success","Welcome to Trip-nest.");
    res.redirect("/tripnests");
   })
    } catch (error) {
    req.flash("error",error.message);
    res.redirect("/tripnests");
    }
    }

module.exports.RenderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login=async (req,res)=>{
    req.flash("success","Welcome backe to Tripnest")
    let redirectUrl=res.locals.redirectUrl||"/tripnests";
    res.redirect(redirectUrl);
}

module.exports.logout=(req,res,next)=>{
    req.logout((error)=>{
        if(error){
            return next(error);
        }
        req.flash("success","You are logged out!")
        res.redirect("/tripnests");
    })
}

module.exports.dashboard = async (req, res) => {

  const user = req.user;

  const bookings = await Booking.find({ user: user._id });

  const trips = await Tripnest.find({ owner: user._id });

  res.render("users/dashboard.ejs", {
    user,
    totalBookings: bookings.length,
    totalTrips: trips.length
  });

};

module.exports.renderEditProfile = (req,res)=>{
    res.render("users/editProfile.ejs",{user:req.user});
};

module.exports.updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (req.body.username) {
    user.username = req.body.username;
  }

  if (req.file) {
    user.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  await user.save();

  req.flash("success", "Profile Updated Successfully");
  res.redirect("/dashboard");
};