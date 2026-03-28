const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const multer=require('multer');
const {storage}=require("../cloudConfig.js");
// const upload=multer({dest:'uploads/'})
const upload=multer({storage})


const { saveRedirectUrl, isLoggedIn } = require("../middleware.js");

const {
  signUp,
  rengerSignUpForm,
  RenderLoginForm,
  logout,
  login,
  dashboard,
  renderEditProfile,
  updateProfile,
} = require("../controllers/user.js");


router.route("/signUp")
.get(rengerSignUpForm)
.post(wrapAsync(signUp));


router.route("/login")
.get(RenderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(login)
);


// DASHBOARD
router.get("/dashboard", isLoggedIn, wrapAsync(dashboard));


// LOGOUT
router.get("/logout", logout);

router.get("/profile/edit", isLoggedIn, renderEditProfile);

router.put(
  "/profile",
  isLoggedIn,
  upload.single("profileImage"),
  wrapAsync(updateProfile)
);


module.exports = router;