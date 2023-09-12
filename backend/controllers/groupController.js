const asyncHandler = require("express-async-handler");

const Group = require("../models/groupModel");

//@desc Get groups
//@route GET api/grooups
//@access PRIVATE
const getGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find({ members: req.user.id });
  res.status(200).json(groups);
});

const inviteUserToGroup = asyncHandler(async (req, res) => {});

const userLeaveGroup = asyncHandler(async (req, res) => {});

const editGroup = asyncHandler(async (req, res) => {});

const deleteGroup = asyncHandler(async (req, res) => {});

module.exports = {
  getGroupsByUser,
  inviteUserToGroup,
  userLeaveGroup,
  editGroup,
  deleteGroup,
};
