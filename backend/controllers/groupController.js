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
  const group = await Group.create({
    groupName: req.body.groupName,
    members: [req.user.id],
    description: req.body.description,
  });

  res.status(200).json(group);
});

const inviteUserToGroup = asyncHandler(async (req, res) => {});

const userLeaveGroup = asyncHandler(async (req, res) => {});

const editGroup = asyncHandler(async (req, res) => {});

const deleteGroup = asyncHandler(async (req, res) => {});

module.exports = {
  getGroups,
  createGroup,
  inviteUserToGroup,
  userLeaveGroup,
  editGroup,
  deleteGroup,
};
