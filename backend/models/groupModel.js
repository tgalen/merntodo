const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // unique: true,
      },
    ],
    pendingMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // unique: true
      },
    ],
    description: {
      type: String,
    },
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Group", groupSchema);
