const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

// @desc Register User
// @route POST /api/users
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "register user" });
});

// @desc Authenticate User
// @route POST /api/users/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

// @desc Get User Data
// @route GET /api/users/me
// @access PUBLIC
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "get user data" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
