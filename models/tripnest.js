const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const DEFAULT_IMAGE_URL =
"https://images.unsplash.com/photo-1678912128919-b69e9e855c00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";

const imageSchema = new Schema({
  filename: {
    type: String,
    default: "tripnestimage",
  },
  url: {
    type: String,
    default: DEFAULT_IMAGE_URL,
    set: (v) => (v === "" || v === undefined ? DEFAULT_IMAGE_URL : v),
  },
});

const tripNestSchema = new Schema({

  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: imageSchema,

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  location: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: [
      "trending",
      "rooms",
      "cities",
      "mountains",
      "castles",
      "pools",
      "camping",
      "farms",
      "arctic",
      "beach",
      "luxury",
      "treehouse",
    ],
    required: true,
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ],

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

}, { timestamps: true });


// Delete all reviews when listing is deleted
tripNestSchema.post("findOneAndDelete", async (tripNest) => {
  if (tripNest) {
    await Review.deleteMany({ _id: { $in: tripNest.reviews } });
  }
});

module.exports = mongoose.model("TripNest", tripNestSchema);