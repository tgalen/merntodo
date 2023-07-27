const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please add a username"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    groups: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      unique: true,
    },
    pendingGroups: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
