const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateTripnest } = require("../middleware.js");

const {
  index,
  createTripnest,
  renderNewForm,
  showTripnest,
  updateTripnest,
  deleteTripnest,
  randerEditForm,
  renderAbout,
  renderGuides,
  renderCareers,
  renderBlog,
  renderContact,
  renderPrivacyAndPolicy,
  renderTermsAndService,
  renderCookie,
} = require("../controllers/tripNests.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });


// ================= HOME / INDEX =================
router.route("/")
.get(
  wrapAsync(index)
)
.post(
  isLoggedIn,
  validateTripnest,
  upload.single("image"),
  wrapAsync(createTripnest)
);


// ================= NEW FORM =================
router.get("/new",
  isLoggedIn,
  renderNewForm
);


// ================= ABOUT PAGE =================
router.get("/about",
  renderAbout
);


// ================= TRAVEL GUIDES PAGE =================
router.get("/guides",
  renderGuides
);

router.get("/careers",
  renderCareers
)

router.get("/blog",
  renderBlog
)

router.get("/contact",
  renderContact
)

router.get("/privacy-policy",
  renderPrivacyAndPolicy
)

router.get("/terms",
  renderTermsAndService
)

router.get("/cookie",
  renderCookie
)

// ================= SHOW / UPDATE / DELETE =================
router.route("/:id")
.get(
  wrapAsync(showTripnest)
)
.put(
  isLoggedIn,
  isOwner,
  validateTripnest,
  upload.single("image"),
  wrapAsync(updateTripnest)
)
.delete(
  isLoggedIn,
  isOwner,
  wrapAsync(deleteTripnest)
);


// ================= EDIT FORM =================
router.get("/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(randerEditForm)
);


// ================= EXPORT =================
module.exports = router;