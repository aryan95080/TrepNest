if(process.env.NODE_ENV!="Production"){
  require('dotenv').config();
}
//console.log(process.env.SECRET);
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js")
const tripNestsRouter=require('./routes/tripNest.js')
const reviewsRouter=require("./routes/review.js")
const userRouter=require("./routes/user.js")
const flash = require("connect-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const passport=require("passport");
const LocalStrategy=require("passport-local")
const User=require("./models/user.js");
const bookingRoutes = require("./routes/booking.js");

const app = express();

/* =====================
   APP CONFIG
===================== */
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

/* =====================
   DATABASE
===================== */
// const MONGODB_URI = "mongodb://127.0.0.1:27017/tripnest";
const DB_URL = process.env.ATLAS_URL;

main()
  .then(() => {
    console.log("MongoDB connected successfully!")
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(DB_URL);
}


async function main(){
  await mongoose.connect(DB_URL);
}
/* =====================
   ROUTES
===================== */

const store=MongoStore.create({
  mongoUrl:DB_URL,
  touchAfter:24*60*60,
  crypto:{
    secret:process.env.SECRET_KEY
  },
  touchAfter:24*60*60
})

store.on("error",function(e){
  console.log("Session store error",e);
})

const sessionOptions={
  store,
  secret:process.env.SECRET_KEY,
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now()+1000*60*60*24*3,
    maxAge:1000*60*60*24*3,
    httpOnly:true 
  }
}



// HOME
app.get("/", (req, res) => {
  res.redirect("/tripnests");
});

app.use(session(sessionOptions));
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user;

  //console.log(res.locals.success);
  next();
})

// app.get("/demoUser", async (req, res) => {
//   let fakeUser = new User({
//     email: "demostudents123@gmail.com",
//     username: "demo123"
//   });

//   let registerUser = await User.register(fakeUser, "demouser123");
//   res.send(registerUser);
// });

// user route
app.use("/tripnests",tripNestsRouter)
app.use("/tripnests/:id/reviews",reviewsRouter);
app.use("/",userRouter);
app.use("/tripnests/:id", bookingRoutes);
app.use("/",bookingRoutes);



/* =====================
   ERROR HANDLING
  ===================== */

  // 404 handler (Express 5 safe)
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Global error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).send(message);
});

/* =====================
   SERVER
===================== */
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
