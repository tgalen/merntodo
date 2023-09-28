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
        todoTitle: {
          type: String,
          required: true,
        },
        todoDescription: String,
        todoType: String,
        priority: String,
        completed: Boolean,
        dueDate: String,
        group: String,
      },
      {
        timestamps: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Group", groupSchema);
