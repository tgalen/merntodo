const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    todoTitle: {
      type: String,
      required: true,
    },
    description: String,
    type: String,
    priority: String,
    completed: Boolean,
    dueDate: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
