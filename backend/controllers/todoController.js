const asyncHandler = require("express-async-handler");

const Todo = require("../models/todoModel");

// @desc Get Todos
// @route GET /api/todos
// @access PRIVATE
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

// @desc Create Todo
// @route POST /api/todos
// @access PRIVATE
const createTodo = asyncHandler(async (req, res) => {
  if (!req.body.todoTitle) {
    res.status(400);
    throw new Error("Please add a Todo Title");
  }

  const todo = await Todo.create({
    todoTitle: req.body.todoTitle,
    type: req.body.type,
    priority: req.body.priority,
  });
  res.status(200).json(todo);
});

// @desc Update Todo
// @route PUT /api/todos/:id
// @access PRIVATE
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTodo);
});

// @desc Delete Todo
// @route DELETE /api/todos/:id
// @access PRIVATE
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
