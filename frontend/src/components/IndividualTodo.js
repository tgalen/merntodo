import Paper from "@mui/material/Paper";

const IndividualTodo = ({ todo }) => {
  return <Paper sx={{ margin: 2, p: 2 }}>{todo.todoTitle}</Paper>;
};

export default IndividualTodo;
