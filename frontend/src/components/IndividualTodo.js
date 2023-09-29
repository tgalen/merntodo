import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Typography from "@mui/material/Typography";

const IndividualTodo = ({ todo }) => {
  return (
    <Paper sx={{ margin: 2, p: 3, borderRadius: 3, display: "flex" }}>
      <Container display="flex" maxWidth="10%">
        <FactCheckIcon fontSize="medium" sx={{ margin: "auto" }} />
      </Container>
      <Container>
        <Typography variant="body2">{todo.todoTitle}</Typography>
        <Typography variant="caption">{todo.todoDescription}</Typography>
      </Container>
    </Paper>
  );
};

export default IndividualTodo;
