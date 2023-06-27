// @desc Get Todos
// @route GET /api/todos
// @access PRIVATE
const getTodos = (req, res) => {
  res.status(200).json({ message: "Get Todos" });
};

// @desc Create Todo
// @route POST /api/todos
// @access PRIVATE
const createTodo = (req, res) => {
  res.status(200).json({ message: "Create Todo" });
};

// @desc Update Todo
// @route PUT /api/todos/:id
// @access PRIVATE
const updateTodo = (req, res) => {
  res.status(200).json({ message: `Update Todo ${req.params.id}` });
};

// @desc Delete Todo
// @route DELETE /api/todos/:id
// @access PRIVATE
const deleteTodo = (req, res) => {
  res.status(200).json({ message: `Delete Todo ${req.params.id}` });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
