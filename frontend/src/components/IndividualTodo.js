import Paper from "@mui/material/Paper";

const IndividualTodo = ({ todo }) => {
  return (
    <Paper sx={{ margin: 2, p: 3, borderRadius: 3 }}>{todo.todoTitle}</Paper>
  );
};

export default IndividualTodo;
