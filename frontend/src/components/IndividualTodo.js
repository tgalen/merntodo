import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const IndividualTodo = ({ todo }) => {
  return (
    <Paper sx={{ margin: 2, p: 3, borderRadius: 3, display: "flex" }}>
      <Container>
        <FactCheckIcon />
      </Container>
      <Container>{todo.todoTitle}</Container>
    </Paper>
  );
};

export default IndividualTodo;
