const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://localhost:27017/Pinterest_Project");

const userSchema = mongoose.Schema({
  fullname: String,
  username: String,
  name: String,
  email: String,
  password: String,
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
