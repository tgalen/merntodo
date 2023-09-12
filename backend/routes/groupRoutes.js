const express = require("express");
const router = express.Router();

const {
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup,
} = require("../controllers/groupController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGroups).post(protect, createGroup);

router.route("/:id").put(protect, updateGroup).delete(protect, deleteGroup);
