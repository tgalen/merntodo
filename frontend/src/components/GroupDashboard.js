import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";

import IndividualTodo from "./IndividualTodo";
import IndividualUser from "./IndividualUser";

const GroupDashboard = ({
  userGroups,
  loggedInVigorUser,
  setUserGroups,
  users,
}) => {
  const [display, setDisplay] = useState("todos");

  const currentURL = window.location.href;
  const splitURL = currentURL.split("/");
  const groupID = splitURL[splitURL.length - 1];

  const handleNavChange = (e, value) => {
    setDisplay(value);
  };

  const userGroup =
    userGroups && userGroups.filter((group) => group._id === groupID);

  const todosWithGroupName =
    userGroups &&
    userGroup[0].todos.map((todo) => {
      return {
        ...todo,
        groupName: userGroup[0].groupName,
        groupID: userGroup[0]._id,
      };
    });

  console.log(users);
  const groupMembers =
    userGroups &&
    users &&
    users.filter((user) => {
      return userGroup[0].members.includes(user._id);
    });

  console.log(groupMembers);

  return (
    <Box>
      <Box sx={{ width: "90%", display: "flex", margin: "10px" }}>
        <h1>{userGroup && userGroup[0].groupName}</h1>
      </Box>
      <Box>
        <BottomNavigation
          showLabels
          value={display}
          onChange={handleNavChange}
          sx={{ backgroundColor: "inherit" }}
        >
          <BottomNavigationAction
            label="Todos"
            icon={<FormatListBulletedIcon />}
            value="todos"
          />
          <BottomNavigationAction
            label="Users"
            icon={<PersonIcon />}
            value="users"
          />
        </BottomNavigation>
      </Box>
      <Box
        bgcolor="inherit"
        padding={2}
        height="74vh"
        id="group-feed"
        overflow="auto"
        maxWidth="500px"
        margin="auto"
      >
        {display === "todos"
          ? userGroups &&
            todosWithGroupName.length > 0 &&
            todosWithGroupName.map((todo) => {
              return (
                <IndividualTodo
                  todo={todo}
                  loggedInVigorUser={loggedInVigorUser}
                  setUserGroups={setUserGroups}
                  userGroups={userGroups}
                />
              );
            })
          : userGroups &&
            groupMembers.map((member) => {
              return <IndividualUser user={member} />;
            })}
      </Box>
    </Box>
  );
};

export default GroupDashboard;
