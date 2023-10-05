import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { GROUPS_API } from "../constants/constants";
import axios from "axios";

const IndividualTodo = ({
  todo,
  loggedInVigorUser,
  userGroups,
  setUserGroups,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const config = {
    headers: {
      Authorization: `Bearer ${loggedInVigorUser.token}`,
    },
  };

  const deleteTodoLocally = () => {
    const updatedUserGroups =
      userGroups &&
      userGroups.map((userGroup) => {
        const filteredTodos = userGroup.todos.filter((t) => t._id !== todo._id);
        const updatedGroup = { ...userGroup, todos: filteredTodos };
        return updatedGroup;
      });
    console.log(updatedUserGroups);
    setUserGroups([...updatedUserGroups]);
  };

  const handleDeleteTodo = async () => {
    console.log(`${GROUPS_API}/${todo.groupID}`);
    const response = await axios.put(
      `${GROUPS_API}/${todo.groupID}`,
      { deleteTodo: true, todoTitle: todo.todoTitle },
      config
    );

    if (response.data) {
      console.log(response.data);
      setMenuOpen(false);
      deleteTodoLocally();
    } else {
      console.log("failed");
    }
  };

  const priorityColors = {
    high: "#fc345c",
    medium: "#faf15d",
    low: "#2eb872",
  };

  return (
    <Paper
      sx={{
        margin: 1.1,
        marginLeft: "auto",
        marginRight: "auto",
        p: 1,
        borderRadius: 1,
        height: "2.5rem",
        display: "flex",
        maxWidth: "400px",
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
          width: { xs: "14.5rem", sm: "18rem" },
          backgroundColor: "yellow",
          display: "block",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Box sx={{ height: "50%" }} id="todo-title">
          <Typography
            sx={{
              marginLeft: "5px",
              marginTop: 0,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "block",
              fontWeight: 550,
              // color: "gray",
              maxWidth: { xs: "230px", sm: "285px" },
            }}
            // variant="body2"
            component="span"
          >
            {todo.todoTitle}
          </Typography>
        </Box>
        <Box
          sx={{
            height: "50%",
            marginLeft: "5px",
            marginTop: 0,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "block",
            maxWidth: { xs: "230px", sm: "285px" },
          }}
        >
          <Typography
            variant="caption"
            component="span"
            sx={{
              fontWeight: "light",
            }}
          >
            {todo.groupName}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "skyblue",
          width: "3rem",
          height: "100%",
          display: "flex",
          marginLeft: "auto",
        }}
        onClick={(e) => {
          setMenuOpen(true);
          handleMenuClick(e);
        }}
      >
        {/* <ReportProblemRoundedIcon
          fontSize="medium"
          sx={{ margin: "auto", color: `${priorityColors[todo.priority]}` }}
        /> */}
        <MoreHorizSharpIcon sx={{ margin: "auto", fontSize: "medium" }} />
      </Box>
      <Menu
        open={menuOpen}
        onClose={(e) => setMenuOpen(false)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <CheckBoxOutlinedIcon sx={{ paddingRight: 1 }} />
          Mark Completed
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleDeleteTodo}>
          <DeleteForeverIcon sx={{ paddingRight: 1 }} />
          Delete
        </MenuItem>
      </Menu>
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
