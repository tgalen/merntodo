const asyncHandler = require("express-async-handler");

const Group = require("../models/groupModel");

//@desc Get groups
//@route GET api/grooups
//@access PRIVATE
const getGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find({ members: req.user.id });

  res.status(200).json(groups);
});

//@desc create Group
// @route POST api/groups
//@access PRIVATE
const createGroup = asyncHandler(async (req, res) => {
  const { groupName, description } = req.body;
  if (!groupName) {
    throw new Error("Please verify you have a Group Name");
  }

  const group = await Group.create({
    groupName: req.body.groupName,
    members: [req.user.id],
    description: req.body.description,
  });

  res.status(200).json(group);
});

const inviteUserToGroup = asyncHandler(async (req, res) => {});

const userLeaveGroup = asyncHandler(async (req, res) => {});

//@desc add todo to Group
//@route PUT /groups/:id
//@access private
const editGroup = asyncHandler(async (req, res) => {
  if (req.body.addTodo) {
    const todo = {
      todoTitle: req.body.todoTitle,
      todoDescription: req.body.todoDescription,
      todoType: req.body.todoType,
      priority: req.body.priority,
      completed: req.body.completed,
      dueDate: req.body.dueDate,
    };
    const updatedGroup = await Group.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { todos: todo } },
      { new: true }
    );
    console.log(updatedGroup);
  }

  if (req.body.deleteTodo) {
    const updatedGroup = await Group.findByIdAndUpdate(
      { _id: req.params.id },
      { $pull: { todos: { todoTitle: req.body.todoTitle } } },
      { new: true }
    );
    console.log(updatedGroup);
    if (updatedGroup) {
      res.status(200).json({ message: "Todo Deleted" });
    }
  }

  // if (!updatedGroup) {
  //   res.status(400).json({ message: "Group not found." });
  // } else {
  //   res.status(200).json(todo);
  // }
});

const deleteGroup = asyncHandler(async (req, res) => {});

module.exports = {
  getGroups,
  createGroup,
  inviteUserToGroup,
  userLeaveGroup,
  editGroup,
  deleteGroup,
};
