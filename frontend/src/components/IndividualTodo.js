import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";

const IndividualTodo = ({ todo }) => {
  return (
    <Paper
      sx={{
        margin: 1.1,
        p: 1,
        borderRadius: 1,
        height: "2rem",
        display: "flex",
      }}
    >
      <Box
        sx={{
          backgroundColor: "skyblue",
          width: "3rem",
          height: "100%",
          display: "flex",
        }}
      >
        <CheckBoxOutlineBlankRoundedIcon
          fontSize="medium"
          sx={{ margin: "auto" }}
        />
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "12rem",
          backgroundColor: "yellow",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textOverflow: "ellipsis",
            marginLeft: "5px",
          }}
          variant="body2"
        >
          {todo.todoTitle}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "skyblue",
          width: "3rem",
          height: "100%",
          display: "flex",
          marginLeft: "auto",
        }}
      >
        <ReportProblemRoundedIcon fontSize="medium" sx={{ margin: "auto" }} />
      </Box>
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
