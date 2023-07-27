const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    // groupName: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // members: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   unique: true,
    // },
    // pendingMembers: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   unique: true,
    // },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Group", groupSchema);
