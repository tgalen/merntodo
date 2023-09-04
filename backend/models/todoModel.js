const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    todoTitle: {
      type: String,
      required: true,
    },
    description: String,
    type: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
    completed: Boolean,
    dueDate: String,
    // users: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   unique: true,
    // },
    // groups: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Group",
    //   unique: true,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
