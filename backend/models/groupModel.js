const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
    members: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    pendingMembers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Group", groupSchema);
