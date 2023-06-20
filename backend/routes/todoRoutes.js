const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "get todos" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "create todo" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `update todo ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `delete todo ${req.params.id}` });
});

module.exports = router;
