const asyncHandler = require("express-async-handler");

// @desc Get Todos
// @route GET /api/todos
// @access PRIVATE
const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Todos" });
});

// @desc Create Todo
// @route POST /api/todos
// @access PRIVATE
const createTodo = asyncHandler(async (req, res) => {
  if (!req.body.todoTitle) {
    res.status(400);
    throw new Error("Please add a Todo Title");
  }
  res.status(200).json({ message: "Create Todo" });
});

// @desc Update Todo
// @route PUT /api/todos/:id
// @access PRIVATE
const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Todo ${req.params.id}` });
});

// @desc Delete Todo
// @route DELETE /api/todos/:id
// @access PRIVATE
const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Todo ${req.params.id}` });
});

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
