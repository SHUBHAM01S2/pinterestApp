const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
require("dotenv").config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

const userSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  name: String,
  email: String,
  password: String, // Consider removing this if using passport-local-mongoose for authentication
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: [],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
