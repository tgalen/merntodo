const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc Register User
// @route POST /api/users
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !password || !email) {
    res.status(400);
    throw new Error("Please verif you have a name, email, annd password");
  }

  const existingUser = User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("Email already has a registered account.");
  }

  const salt = bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      emai: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
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
