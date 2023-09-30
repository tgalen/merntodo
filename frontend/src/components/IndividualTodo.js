import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Typography from "@mui/material/Typography";

const IndividualTodo = ({ todo }) => {
  return (
    <Paper sx={{ margin: 1.1, p: 1, borderRadius: 1, height: "2rem" }}>
      {/* <Container id="icon-container">
        <FactCheckIcon fontSize="medium" />
      </Container>
      <Container>
        <Typography sx={{ textOverflow: "ellipsis" }} variant="body2">
          {todo.todoTitle}
        </Typography>

        <Typography variant="caption">{todo.todoDescription}</Typography>
      </Container> */}
    </Paper>
  );
};

export default IndividualTodo;
