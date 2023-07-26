const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
      unique: true,
    },
    members: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Group", groupSchema);
